import React, { useEffect, useState } from "react";
import axios from "axios";
import UserSidebar from "./UserSider";

export default function Userprogress() {
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

    const confirmAction = window.confirm("Are you sure you want to update status?");
    if (!confirmAction) return;

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
  };

  return (
    <div className="d-flex">
      <UserSidebar />
      <div className="content bg-black">
        <h2 className="title text-secondary">User Progress Tasks</h2>
        <div className="task-grid">
          {tasks
            .filter((task) => task.taskstatus.toLowerCase() === "in progress")
            .map((task) => (
              <div className="task-card m-3" key={task._id} style={{ background: getCardColor(task.taskstatus) }}>
                <div className="card-header" style={{ backgroundColor: getStatusColor(task.taskstatus), borderRadius: "10px" }}>
                  <h3>{task.taskname}</h3>
                  <span className="status" style={{ backgroundColor: getStatusColor(task.taskstatus) }}>{task.taskstatus.toUpperCase()}</span>
                </div>
                <div className="card-body">
                  <b className="priority" style={{ color: getPriorityColor(task.priority) }}>{task.priority}</b>
                  <p className="task-desc-box">
                    <span className="task-desc">{task.taskdes}</span>
                  </p>
                  <div className="date-info">
                    <p><strong>Start:</strong> {task.startDate || "N/A"}</p>
                    <p><strong>End:</strong> {task.endDate || "N/A"}</p>
                  </div>
                  <button 
                    className="update-btn" 
                    onClick={() => updateStatus(task._id, task.taskstatus)}
                    disabled={task.taskstatus === "completed"}
                  >
                    Mark as Completed
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <style jsx>{`
        .priority {
          display: block;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .content {
          flex: 1;
          padding: 30px;
          background: #f9f9f9;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
        }
        .task-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .task-card {
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          transition: transform 0.3s;
          padding: 20px;
        }
        .task-card:hover {
          transform: translateY(-5px);
        }
        .card-header {
          padding: 15px;
          color: white;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          border-radius: 10px 10px 0 0;
        }
        .status {
          padding: 5px 10px;
          font-size: 12px;
          border-radius: 5px;
          font-weight: bold;
        }
        .card-body {
          padding: 20px;
          text-align: center;
        }
        .task-desc-box {
          background: #f1f1f1;
          padding: 15px;
          border-radius: 5px;
          display: block;
          margin-bottom: 15px;
          text-align: left;
        }
        .task-desc {
          color: #666;
          font-size: 14px;
          display: block;
          word-wrap: break-word;
        }
        .date-info {
          font-size: 12px;
          color: #888;
          margin-bottom: 10px;
        }
        .update-btn {
          padding: 8px 15px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .update-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        .update-btn:hover:not(:disabled) {
          background: #218838;
        }
      `}</style>
    </div>
  );
}

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "pending": return "#FFA726";
    case "completed": return "#4CAF50";
    case "in progress": return "#03A9F4";
    case "deployed": return "#9C27B0";
    case "deferred": return "#9E9E9E";
    default: return "#FFF";
  }
};

const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case "high priority": return "red";
    case "medium priority": return "grey";
    case "low priority": return "yellow";
    default: return "black";
  }
};

const getCardColor = (status) => {
  switch (status.toLowerCase()) {
    case "pending": return "#FFF3E0";
    case "completed": return "#E8F5E9";
    case "in progress": return "#E3F2FD";
    case "deployed": return "#F3E5F5";
    case "deferred": return "#F5F5F5";
    default: return "#FFFFFF";
  }
};
