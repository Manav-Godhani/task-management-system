import React, { useEffect, useState } from "react";
import Navebar from "./Navebar";
import axios from "axios";

function StudentDashboard() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0);
  const [filter, setFilter] = useState("all"); // Renamed finclter to filter

  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await axios.get("http://localhost:3000/gettask");
        console.log(response.data.data);
        setData(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getTask();
  }, [status]);

  const updateTask = async (id) => {
    try {
      const response = await axios.post(`http://localhost:3000/updatetask/${id}`);
      console.log(response.data.data);
    } catch (e) {
      console.log(e);
    }
    setStatus(!status);
  };

  const deleteTask = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/deletetask/${id}`);
      console.log(response.data.data);
    } catch (e) {
      console.log(e);
    }
    setStatus(!status);
  };

  const statusStyle = (status) => {
    if (status === "pending") {
      return {
        color: "black",
        backgroundColor: "yellow", // Background for pending
        padding: "5px 10px",
        borderRadius: "5px",
      };
    } else if (status === "completed") {
      return {
        color: "white",
        backgroundColor: "green", // Background for complete
        padding: "5px 10px",
        borderRadius: "5px",
      };
    }
    return {};
  };

  // Filter the data based on the selected radio button
  const filteredData = data.filter(item => {
    if (filter === "completed") return item.taskstatus === "completed";
    if (filter === "pending") return item.taskstatus === "pending";
    return true; // for "all"
  });

  return (
    <>
      <Navebar />
      <div className="container-fluid" style={{ backgroundColor: "#FFA07A ", padding: 120 }}>
        <h2 className="text-center mb-4 ">-: Task List :- </h2>

        {/* Radio buttons for filtering */}
        <div className="mb-4">
          <label>
            <input 
              type="radio" 
              value="all" 
              checked={filter === "all"} 
              onChange={() => setFilter("all")} 
            /> All
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input 
              type="radio" 
              value="completed" 
              checked={filter === "completed"} 
              onChange={() => setFilter("completed")} 
            /> Completed
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input 
              type="radio" 
              value="pending" 
              checked={filter === "pending"} 
              onChange={() => setFilter("pending")} 
            /> Pending
          </label>
        </div>

        {filteredData.map((item) => (
          <div key={item._id} className="card mb-4 shadow p-2">
            <div className="card-body">
              <h3 className="card-title" style={{fontFamily:'Forte'}}>➡️ {item.taskname}</h3>
              <p className="card-text">{item.taskdes}</p>
              <p className="card-text">
                <strong>Status : </strong>
                <span style={statusStyle(item.taskstatus)}>
                  {item.taskstatus.charAt(0).toUpperCase() + item.taskstatus.slice(1)}
                </span>
              </p>
              <button
                className="btn btn-success me-2 mt-5"
                onClick={() => updateTask(item._id)}
              >
                Check
              </button>
              <button
                className="btn btn-danger mt-5"
                onClick={() => deleteTask(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default StudentDashboard;
