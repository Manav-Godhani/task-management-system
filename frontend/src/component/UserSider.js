import React, { useState } from "react";
import { GrUser } from "react-icons/gr";
import {
  MdDashboard,
  MdOutlineTaskAlt,
  MdQueryStats,
  MdLogout,
  MdFilterAlt,
  MdPriorityHigh,
  MdLowPriority,
  MdOutlineSignalCellularAlt,
  MdCategory,
  MdPendingActions,
  MdOutlineHourglassEmpty,
  MdPublishedWithChanges,
  MdOutlineDoNotDisturbAlt
} from "react-icons/md";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div style={styles.sidebarContainer} className="col-md-12">
      {/* Sidebar Header */}
      <div style={styles.headerContainer}>
        <GrUser /><h3 className="mt-2 m-2"><b>Welcome !</b></h3>
      </div>

      {/* Sidebar Navigation */}
      <nav style={styles.navContainer}>
        <ul style={styles.navList} className="mb-5">
          {/* Dashboard */}
          <li>
            <Link to="/userview" style={styles.navLink}>
              <MdDashboard style={styles.icon} />
              <span style={styles.navText} className="my-1">Dashboard</span>
            </Link>
          </li>

          {/* Filter Tasks */}
          <li>
            <div style={{ ...styles.navLink, cursor: "pointer" }}>
              <MdFilterAlt style={styles.icon} />
              <span style={styles.navText} className="my-1">Filter</span>
            </div>
            <ul style={styles.subMenu}>
              {/* Priority */}
              <li>
                <div style={{ ...styles.subNavLink, cursor: "pointer" }}>
                  <MdPriorityHigh style={styles.icon} /> Priority
                </div>
                <ul style={styles.subSubMenu}>
                  <li><Link to="/filtertask/high" style={styles.subNavLink}><MdPriorityHigh style={styles.icon} /> High Priority</Link></li>
                  <li><Link to="/filtertask/medium" style={styles.subNavLink}><MdOutlineSignalCellularAlt style={styles.icon} /> Medium Priority</Link></li>
                  <li><Link to="/filtertask/low" style={styles.subNavLink}><MdLowPriority style={styles.icon} /> Low Priority</Link></li>
                </ul>
              </li>
              
              {/* Category */}
              <li>
                <div style={{ ...styles.subNavLink, cursor: "pointer" }}>
                  <MdCategory style={styles.icon} /> Category
                </div>
                <ul style={styles.subSubMenu}>
                  <li><Link to="/filtertask/progress" style={styles.subNavLink}><MdPendingActions style={styles.icon} /> Pending</Link></li>
                  <li><Link to="/filtertask/in-progress" style={styles.subNavLink}><MdOutlineHourglassEmpty style={styles.icon} /> In Progress</Link></li>
                  <li><Link to="/filtertask/deployed" style={styles.subNavLink}><MdPublishedWithChanges style={styles.icon} /> Deployed</Link></li>
                  <li><Link to="/filtertask/deferred" style={styles.subNavLink}><MdOutlineDoNotDisturbAlt style={styles.icon} /> Deferred</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Completed Tasks */}
          <li>
            <Link to="/usercompletedtasks" style={styles.navLink}>
              <MdOutlineTaskAlt style={styles.icon} />
              <span style={styles.navText} className="my-1 mt-4">Completed Tasks</span>
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
          {/* <li className="mt-5 bg-danger" style={{ margin: "80px", listStyle: "none", borderRadius: "10px" }}>
            <Link to="/" style={styles.navLink}>
              <MdLogout style={styles.icon} />
              <button className="btn btn-danger">Logout</button>
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

const styles = {
  sidebarContainer: {
    backgroundColor: "#1C4E80",
    minHeight: "100vh",
    width: "20rem",
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
  },
  navLink: {
    padding: "0.60rem 1.75rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#D1D5DB",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s",
  },
  subMenu: {
    listStyle: "none",
    paddingLeft: "4rem",
    marginTop: "0.5rem",
  },
  subSubMenu: {
    listStyle: "none",
    paddingLeft: "3rem",
    marginTop: "0.5rem",
  },
  subNavLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.4rem 0",
    color: "#D1D5DB",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s",
  },
};

export default UserSidebar;
