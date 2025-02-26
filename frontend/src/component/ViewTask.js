import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./sider";

function TaskDashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/gettask");
        setTasks(response.data.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const updateStatus = async (id, currentStatus) => {
    // If the current status is already "completed", do nothing
    if (currentStatus === "completed") {
      return;
    }

    // Define allowed statuses that can be updated to "completed"
    const allowedStatuses = ["pending", "in progress", "deployed", "deferred"];

    // Check if the current status is in the allowed statuses
    if (allowedStatuses.includes(currentStatus)) {
      try {
        // Set new status to "completed"
        const newStatus = "completed";

        // Send a request to update the task status
        await axios.post(`http://localhost:3000/updatetask/${id}`, {
          taskstatus: newStatus,
        });

        // Update the local task state
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === id ? { ...task, taskstatus: newStatus } : task
          )
        );
      } catch (error) {
        console.error("Error updating task status:", error);
      }
    }
  };

  const totalTasks = tasks.length;
  const totalCompleted = tasks.filter(
    (task) => task.taskstatus === "completed"
  ).length;
  const totalPending = tasks.filter(
    (task) => task.taskstatus === "pending"
  ).length;
  const totalInProgress = tasks.filter(
    (task) => task.taskstatus === "in progress"
  ).length;
  const totalDeployed = tasks.filter(
    (task) => task.taskstatus === "deployed"
  ).length;
  const totalDeferred = tasks.filter(
    (task) => task.taskstatus === "deferred"
  ).length;

  // const deleteTask = async (id) => {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/deletetask/${id}`);
  //     console.log(response.data.data);
  //     setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  //   } catch (error) {
  //     console.error("Error deleting task:", error);
  //   }
  // };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "#FFEB3B"; // Yellow
      case "completed":
        return "#4CAF50"; // Green
      case "in progress":
        return "#03A9F4"; // Sky Blue
      case "deployed":
        return "#9C27B0"; // Purple
      case "deferred":
        return "#9E9E9E"; // Grey
      default:
        return "#FFFFFF"; // Default White
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high priority":
        return "red";
      case "medium priority":
        return "grey";
      case "low priority":
        return "yellow";
      default:
        return "black";
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        style={{
          marginLeft: "20px", // Ensures content doesn't overlap with the sidebar
          width: "calc(100% - 250px)", // Ensures content takes up the rest of the screen width
          padding: "70px",
          minHeight: "100vh", // Ensure the content takes the full height of the viewport
          boxSizing: "border-box",
        }}
        className="bg-white"
      >
        <div className="row mb-4">
          {[
            {
              title: "Total Tasks",
              count: totalTasks,
              gradient: "linear-gradient(135deg, #6a11cb, #2575fc)",
            },
            {
              title: "Completed Tasks",
              count: totalCompleted,
              gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
            },
            {
              title: "Pending Tasks",
              count: totalPending,
              gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
            },
            {
              title: "In Progress",
              count: totalInProgress,
              gradient: "linear-gradient(135deg, #3a7bd5, #00d2ff)",
            },
            {
              title: "Deployed Tasks",
              count: totalDeployed,
              gradient: "linear-gradient(135deg,rgb(159, 62, 186),rgb(211, 128, 212))",
            },
            {
              title: "Deferred Tasks",
              count: totalDeferred,
              gradient: "linear-gradient(135deg, #bdc3c7, #2c3e50)",
            },
          ].map(({ title, count, gradient }, index) => (
            <div className="col-md-2" key={index}>
              <div
                className="card text-center p-3"
                style={{
                  borderRadius: "15px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  background: gradient,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.1)";
                }}
              >
                <h6
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#fff",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {title}
                </h6>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "24px",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {count}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="row"
          style={{
            maxHeight: "calc(95vh - 269px)", // Adjust height for the scrollable area (subtracts padding/margins)
            overflowY: "auto", // Enables vertical scrolling
            paddingLeft: "10px", // Ensures the cards stay aligned with the sidebar
            paddingRight: "10px",
          }}
        >
          {tasks.map((task) => (
            <div className="col-md-4 mb-4" key={task._id}>
              <div
                className="card m-4"
                style={{
                  border: "none",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  overflow: "hidden",
                  border: "solid grey 1px",
                  padding: "5px",
                }}
              >
                <b
                    className="p-1"
                    style={{ color: getPriorityColor(task.priority) }}
                  >
                    {task.priority}
                  </b>

                {/* Header Section with Status Color */}
                <div className="p-4">
                  <div
                    style={{
                      backgroundColor: getStatusColor(task.taskstatus),
                      padding: "30px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: task.taskstatus === "completed" ? "#FFF" : "#000",
                      borderRadius: "15px",
                      fontSize: "18px",
                      color: "black",
                      fontFamily: "cursive",
                    }}
                  >
                    {task.taskname}
                  </div>

                  {/* Body Section */}
                  <div className="card-body text-center">
                    <h5
                      className="card-title"
                      style={{
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    ></h5>
                    <p
                      className="card-text mb-5"
                      style={{
                        color: "#777",
                        fontSize: "18px",
                        fontFamily: "monospace",
                      }}
                    >
                      {task.taskdes}
                    </p>
                    <div className="d-flex justify-content-between">
                      <p style={{ fontSize: "12px", margin: 0 }}>
                        <strong style={{ fontSize: "15px" }}>
                          Start Date:
                          <br />
                        </strong>{" "}
                        {task.startDate || "N/A"}
                      </p>
                      <p style={{ fontSize: "12px", margin: 0 }}>
                        <strong style={{ fontSize: "15px" }}>
                          End Date:
                          <br />
                        </strong>{" "}
                        {task.endDate || "N/A"}
                      </p>
                    </div>
                    {/* <p
                    className="text-muted mt-2"
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    Manav Godhani
                  </p> */}

                    {/* Status Button */}
                    <div
                      onClick={() => updateStatus(task._id, task.taskstatus)}
                      style={{
                        backgroundColor: getStatusColor(task.taskstatus),
                        color:
                          task.taskstatus === "completed" ? "#FFF" : "#000",
                        padding: "5px 15px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        display: "inline-block",
                        marginTop: "10px",
                        cursor:
                          task.taskstatus === "completed"
                            ? "not-allowed"
                            : "pointer", // Disable click if completed
                      }}
                    >
                      {task.taskstatus.toUpperCase()}
                    </div>

                    {/* Delete Button */}
                    {/* <button
                    className="btn btn-danger mt-3"
                    onClick={() => deleteTask(task._id)}
                  >
                    Delete
                  </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskDashboard;
