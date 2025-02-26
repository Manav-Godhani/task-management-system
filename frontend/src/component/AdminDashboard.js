import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sider';

function AdminDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    taskname: '',
    taskdes: '',
    priority:'',
    taskstatus:'',
    startDate: '',
    endDate: ''
  });
  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'danger'

  const addTask = async () => {
    try {
      const response = await axios.post('http://localhost:3000/addtask', data);
      console.log(response);
      if (response.data.success) {
        setData({ taskname: '', taskdes: '', startDate: '', endDate: '', priority:'', taskstatus:''});
        setTimeout(() => navigate('/admindash'), 20); // Navigate after 2 seconds to allow alert display
      } else {
        setAlertMsg('Failed to add task. Please try again.');
        setAlertType('danger');
        setTimeout(() => setAlertMsg(''), 3000);
      }
    } catch (e) {
      console.log(e);
      setAlertMsg('Error occurred. Please try again.');
      setAlertType('danger');
      setTimeout(() => setAlertMsg(''), 3000);
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>
  
      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <div className="container">
          <div className="col-md-6 mx-auto">
            <div className="p-4 bg-dark shadow-lg rounded text-light">
              <h2 className="text-center mb-3">Add New Task</h2>

              {alertMsg && (
                <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
                  {alertMsg}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setAlertMsg('')}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <form>
                <div className="mb-3">
                  <label htmlFor="formTaskName" className="form-label">Task Name</label>
                  <input
                    type="text"
                    className="form-control border-0 shadow-sm"
                    id="formTaskName"
                    placeholder="Enter task name"
                    value={data.taskname}
                    onChange={(e) => setData({ ...data, taskname: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="formTaskDescription" className="form-label">Task Description</label>
                  <textarea
                    className="form-control border-0 shadow-sm"
                    id="formTaskDescription"
                    rows={3}
                    placeholder="Enter task description"
                    value={data.taskdes}
                    onChange={(e) => setData({ ...data, taskdes: e.target.value })}
                    required
                  />
                </div>

                {/* Priority */}
                <div className="mb-3">
                  <label htmlFor="formPriority" className="form-label">Priority</label>
                  <select
                    className="form-select border-0 shadow-sm"
                    id="formPriority"
                    value={data.priority}
                    onChange={(e) => setData({ ...data, priority: e.target.value })}
                    required
                  >
                    <option value="" disabled>Select Priority</option>
                    <option value="Low Priority">Low Priority</option>
                    <option value="Medium Priority">Medium Priority</option>
                    <option value="High Priority">High Priority</option>
                  </select>
                </div>

                {/* Task Status */}
                <div className="mb-3">
                  <label htmlFor="formStatus" className="form-label">Task Status</label>
                  <select
                    className="form-select border-0 shadow-sm"
                    id="formStatus"
                    value={data.taskstatus}
                    onChange={(e) => setData({ ...data, taskstatus: e.target.value })}
                    required
                  >
                    <option value="" disabled>Choose Task Status</option>
                    <option value="completed">completed</option>
                    <option value="pending">pending</option>
                    <option value="in progress">in progress</option>
                    <option value="deployed">deployed</option>
                    <option value="deferred">deferred</option>
                  </select>
                </div>

                {/* Start Date */}
                <div className="mb-3">
                  <label htmlFor="formStartDate" className="form-label">Start Date</label>
                  <input
                    type="date"
                    className="form-control border-0 shadow-sm"
                    id="formStartDate"
                    value={data.startDate}
                    onChange={(e) => setData({ ...data, startDate: e.target.value })}
                    required
                  />
                </div>

                {/* End Date */}
                <div className="mb-3">
                  <label htmlFor="formEndDate" className="form-label">End Date</label>
                  <input
                    type="date"
                    className="form-control border-0 shadow-sm"
                    id="formEndDate"
                    value={data.endDate}
                    min={data.startDate}
                    onChange={(e) => setData({ ...data, endDate: e.target.value })}
                    required
                  />
                </div>

                <div className="text-center">
                  <button type="button" className="btn btn-secondary px-5 me-2" onClick={addTask}>
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      {/* Inline CSS */}
      <style jsx>{`
        .sidebar {
          width: 240px;
          min-height: 100vh;
        }

        .form-control {
          background-color: rgb(255, 255, 255);
          color: rgb(0, 0, 0);
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .form-control:focus {
          background-color: rgb(206, 211, 216);
          box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }

        .bg-dark {
          background-color: rgba(79, 70, 229, 1) !important;
        }

        .btn-secondary {
          background-color: rgba(30, 144, 255, 1);
        }

        .container {
          max-width: 600px; /* Set max width of the form */
        }

        .p-4 {
          padding: 20px;
        }

        .col-md-6 {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default AdminDashboard;
