import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UserSidebar from "./UserSider";

function Userview() {
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
    if (currentStatus === "completed") return;
    const allowedStatuses = ["pending", "in progress", "deployed", "deferred"];
    if (allowedStatuses.includes(currentStatus)) {
      try {
        await axios.post(`http://localhost:3000/updatetask/${id}`, {
          taskstatus: "completed",
        });

        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === id ? { ...task, taskstatus: "completed" } : task
          )
        );
      } catch (error) {
        console.error("Error updating task status:", error);
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "#FFEB3B";
      case "completed":
        return "#4CAF50";
      case "in progress":
        return "#03A9F4";
      case "deployed":
        return "#9C27B0";
      case "deferred":
        return "#9E9E9E";
      default:
        return "#FFFFFF";
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
    <div className="d-flex w-100 overflow-hidden">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <div
        style={{
          flexGrow: 1,
          padding: "70px",
          minHeight: "100vh",
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
        className="bg-white"
      >
        <div className="row mb-4">
          {[
            { title: "Total Tasks", count: tasks.length, gradient: "linear-gradient(135deg, #6a11cb, #2575fc)" },
            { title: "Completed Tasks", count: tasks.filter(task => task.taskstatus === "completed").length, gradient: "linear-gradient(135deg, #11998e, #38ef7d)" },
            { title: "Pending Tasks", count: tasks.filter(task => task.taskstatus === "pending").length, gradient: "linear-gradient(135deg, #f7971e, #ffd200)" },
            { title: "In Progress", count: tasks.filter(task => task.taskstatus === "in progress").length, gradient: "linear-gradient(135deg, #3a7bd5, #00d2ff)" },
            { title: "Deployed Tasks", count: tasks.filter(task => task.taskstatus === "deployed").length, gradient: "linear-gradient(135deg, rgb(159, 62, 186), rgb(211, 128, 212))" },
            { title: "Deferred Tasks", count: tasks.filter(task => task.taskstatus === "deferred").length, gradient: "linear-gradient(135deg, #bdc3c7, #2c3e50)" },
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
              >
                <h6 style={{ fontSize: "14px", fontWeight: "bold", color: "#fff", marginBottom: "8px" }}>
                  {title}
                </h6>
                <div style={{ fontWeight: "bold", color: "#fff", fontSize: "24px" }}>{count}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Task Cards */}
        <div className="row" style={{ maxHeight: "calc(95vh - 269px)", overflowY: "auto" }}>
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
                <b className="p-1" style={{ color: getPriorityColor(task.priority) }}>
                  {task.priority}
                </b>

                <div className="p-4">
                  <div
                    style={{
                      backgroundColor: getStatusColor(task.taskstatus),
                      padding: "30px",
                      textAlign: "center",
                      fontWeight: "bold",
                      borderRadius: "15px",
                      fontSize: "18px",
                      fontFamily: "cursive",
                    }}
                  >
                    {task.taskname}
                  </div>

                  <div className="card-body text-center">
                    <p className="card-text mb-5" style={{ color: "#777", fontSize: "18px", fontFamily: "monospace" }}>
                      {task.taskdes}
                    </p>
                    <div className="d-flex justify-content-between">
                      <p style={{ fontSize: "12px", margin: 0 }}>
                        <strong style={{ fontSize: "15px" }}>Start Date:</strong> {task.startDate || "N/A"}
                      </p>
                      <p style={{ fontSize: "12px", margin: 0 }}>
                        <strong style={{ fontSize: "15px" }}>End Date:</strong> {task.endDate || "N/A"}
                      </p>
                    </div>

                    <div
                      onClick={() => updateStatus(task._id, task.taskstatus)}
                      style={{
                        backgroundColor: getStatusColor(task.taskstatus),
                        color: task.taskstatus === "completed" ? "#FFF" : "#000",
                        padding: "5px 15px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        display: "inline-block",
                        marginTop: "10px",
                        cursor: task.taskstatus === "completed" ? "not-allowed" : "pointer",
                      }}
                    >
                      {task.taskstatus.toUpperCase()}
                    </div>
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

export default Userview;
