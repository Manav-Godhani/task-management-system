import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./sider";

export default function PendingTasks() {
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
        const newStatus = "completed";
        await axios.post(`http://localhost:3000/updatetask/${id}`, {
          taskstatus: newStatus,
        });

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
          marginLeft: "20px",
          width: "calc(100% - 250px)",
          padding: "70px",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
        className="bg-white"
      >
        <div
          className="row"
          style={{
            maxHeight: "calc(95vh - 95px)",
            overflowY: "auto",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          {tasks
            .filter((task) => task.taskstatus.toLowerCase() === "pending")
            .map((task) => (
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
                        color:
                          task.taskstatus === "completed" ? "#FFF" : "#000",
                        borderRadius: "15px",
                        fontSize: "18px",
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

                      {/* Status Button */}
                      <div
                        onClick={() =>
                          updateStatus(task._id, task.taskstatus)
                        }
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
                              : "pointer",
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
