import React from 'react';
import Sidebar from './sider';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2'; // Use the Bar chart instead of Line if you need bar chart visualization
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function Taskstatus() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/gettask');
        setTasks(response.data.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  // Count the total number of tasks, completed tasks, pending tasks, and others
  const totalTasks = tasks.length;
  const totalCompleted = tasks.filter((task) => task.taskstatus === 'completed').length;
  const totalPending = tasks.filter((task) => task.taskstatus === 'pending').length;
  const totalInProgress = tasks.filter((task) => task.taskstatus === 'in progress').length;
  const totalDeployed = tasks.filter((task) => task.taskstatus === 'deployed').length;
  const totalDeferred = tasks.filter((task) => task.taskstatus === 'deferred').length;

  // Data for the chart
  const chartData = {
    labels: [
      'Total Tasks',
      'Completed Tasks',
      'Pending Tasks',
      'In Progress Tasks',
      'Deployed Tasks',
      'Deferred Tasks',
    ], // Labels for the chart
    datasets: [
      {
        label: 'Task Statuses', // Label for the chart
        data: [
          totalTasks,
          totalCompleted,
          totalPending,
          totalInProgress,
          totalDeployed,
          totalDeferred,
        ], // Data points (total, completed, pending, in progress, deployed, deferred)
        backgroundColor: [
          'rgba(0,123,255,0.6)', // Total Tasks (Blue)
          'rgba(40,167,69,0.6)', // Completed Tasks (Green)
          'rgba(255,193,7,0.6)', // Pending Tasks (Yellow)
          'rgba(0,123,255,0.6)', // In Progress Tasks (Light Blue)
          'rgba(255,87,34,0.6)', // Deployed Tasks (Orange)
          'rgba(158,158,158,0.6)', // Deferred Tasks (Grey)
        ], // Color for each section
        borderColor: [
          'rgba(0,123,255,1)', // Border Color for Total Tasks
          'rgba(40,167,69,1)', // Border Color for Completed Tasks
          'rgba(255,193,7,1)', // Border Color for Pending Tasks
          'rgba(0,123,255,1)', // Border Color for In Progress Tasks
          'rgba(255,87,34,1)', // Border Color for Deployed Tasks
          'rgba(158,158,158,1)', // Border Color for Deferred Tasks
        ], // Border color for each section
        borderWidth: 1, // Border width for each section
      },
    ],
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
          marginLeft: '20px',
          width: 'calc(100% - 250px)',
          padding: '70px',
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}
        className="bg-white"
      >
        {/* Top 3 Boxes */}
        <div className="row mb-4">
          <div className="col-md-2">
            <div className="card text-center p-4">
              <h6 style={{fontSize:"13px"}}>Total Tasks</h6>
              <div className="display-6">{totalTasks}</div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card text-center p-4">
              <h6 style={{fontSize:"13px"}}>Completed Tasks</h6>
              <div className="display-6 text-success">{totalCompleted}</div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card text-center p-4">
              <h6 style={{fontSize:"13px"}}>Pending Tasks</h6>
              <div className="display-6 text-warning">{totalPending}</div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card text-center p-4">
              <h6 style={{fontSize:"13px"}}>In Progress Tasks</h6>
              <div className="display-6" style={{color:"purple"}}>{totalInProgress}</div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card text-center p-4">
              <h6 style={{fontSize:"13px"}}>Deployed Tasks</h6>
              <div className="display-6" style={{color:"orange"}}>{totalDeployed}</div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="card text-center p-4">
              <h6 style={{fontSize:"13px"}}>Deferred Tasks</h6>
              <div className="display-6" style={{color:"gray"}}>{totalDeferred}</div>
            </div>
          </div>
        </div>

        {/* Chart */}
        {/* Chart */}
<div className="chart-container" 
     style={{ maxWidth: '680px', height: '400px', margin: '0 auto', marginTop:'60px' }}>
  <h4>Task Status Distribution</h4>
  <Bar data={chartData} options={{ maintainAspectRatio: false }} /> {/* Fix aspect ratio */}
</div>

      </div>
    </div>
  );
}
