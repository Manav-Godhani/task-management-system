import React from 'react'
import Sidebar from './sider'
import { Route, Routes } from 'react-router-dom'
import ViewTask from './ViewTask'
import Completedtask from './Completedtask'

export default function Admindash() {
  return (
    <>
       <div style={{ display: 'flex', height: '100vh' }}>
      {/* Fixed Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#2c3e50', color: 'white' }}>
        <Sidebar />
      </div>

      {/* Dynamic Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/viewtask" element={<ViewTask/>} />
          <Route path="/completedtasks" element={<Completedtask/>} />
        </Routes>
      </div>

      
    </div>
    </>
  )
}
