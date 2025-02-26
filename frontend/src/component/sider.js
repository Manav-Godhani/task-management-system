import React from "react";
import { GrInProgress, GrUserAdmin } from "react-icons/gr";
import {
  MdDashboard,
  MdOutlineTaskAlt,
  MdAddTask,
  MdPendingActions,
  MdCloudDone,
  MdOutlineAccessTimeFilled,
  MdQueryStats,
  MdLogout
} from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div style={styles.sidebarContainer} className="col-md-12">
        {/* Sidebar Header */}
        <div style={styles.headerContainer}>
          <GrUserAdmin /><h3 className="mt-2 m-2"><b>Admin Pannel</b></h3>
          <span style={styles.headerText}>Task Manager</span>
        </div>

        {/* Sidebar Navigation */}
        <nav style={styles.navContainer}>
          <ul style={styles.navList} className="mb-5">
            {/* Dashboard */}
            <li>
              <Link to="/viewtask" style={styles.navLink}>
                <MdDashboard style={styles.icon} />
                <span style={styles.navText} className="my-1">Dashboard</span>
              </Link>
            </li>

            {/* Completed Tasks */}
            <li>
              <Link to="/completedtasks" style={styles.navLink}>
                <MdOutlineTaskAlt style={styles.icon} />
                <span style={styles.navText} className="my-1">Completed Tasks</span>
              </Link>
            </li>

            {/* Pending Tasks */}
            <li>
              <Link to="/pendingTask" style={styles.navLink}>
                <MdPendingActions style={styles.icon} />
                <span style={styles.navText} className="my-1">Pending Tasks</span>
              </Link>
            </li>

            {/* In Progress Tasks */}
            <li>
              <Link to="/inProgressTask" style={styles.navLink}>
                <GrInProgress style={styles.icon} />
                <span style={styles.navText} className="my-1">In Progress Tasks</span>
              </Link>
            </li>

            {/* Deployed Tasks */}
            <li>
              <Link to="/deployedTask" style={styles.navLink}>
                <MdCloudDone style={styles.icon} />
                <span style={styles.navText} className="my-1">Deployed Tasks</span>
              </Link>
            </li>

            {/* Deferred Tasks */}
            <li>
              <Link to="/deferredTask" style={styles.navLink}>
                <MdOutlineAccessTimeFilled style={styles.icon} />
                <span style={styles.navText} className="my-1">Deferred Tasks</span>
              </Link>
            </li>

            {/* Add New Tasks */}
            <li>
              <Link to="/admindash" style={styles.navLink}>
                <MdAddTask style={styles.icon} />
                <span style={styles.navText} className="my-1">Add New Tasks</span>
              </Link>
            </li>

            {/* Task Stats */}
            <li>
              <Link to="/statsTask" style={styles.navLink}>
                <MdQueryStats style={styles.icon} />
                <span style={styles.navText} className="my-1">Task Status</span>
              </Link>
            </li>

            {/* Logout */}
            <li className="mt-5 bg-danger" style={{margin:"80px",listStyle:"none", borderRadius:"10px"}}>

              <Link to="/" style={styles.navLink}>
                <MdLogout style={styles.icon} />
                <button className="btn btn-danger">Logout</button>
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </>
  );
};

const styles = {
  sidebarContainer: {
    backgroundColor: "#4F46E5",
    //backgroundColor:"black",
    //backgroundColor:"#1C4E80",

    minHeight: "100vh",
    width: "20rem",
    sm: { width: "19rem" },
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    fontFamily: "Roboto, sans-serif",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "2rem",
    color: "#FFFFFF",
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "1.5rem",
  },
  headerText: {
    display: "none",
    sm: { display: "block" },
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
    justifyContent: "flex-start",
  },
  navList: {
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  navLink: {
    padding: "0.60rem 1.75rem",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#D1D5DB",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s",
    fontFamily: "Roboto, sans-serif"
  },
  navLinkHover: {
    color: "#4B5563",
  },
  icon: {
    fontSize: "1.5rem",
  },
  navText: {
    //display: "none",
    sm: { display: "block" },
  },
};

export default Sidebar;
