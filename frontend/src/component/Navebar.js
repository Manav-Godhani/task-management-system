import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Task from "../assets/task.json";
import Lottie from "lottie-react";
// import img from './images/logo512.png'; // Replace with your logo path

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close the menu if switching to desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Scroll to the top whenever the location changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [location]); // The effect will run every time the route changes

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 20px',
      backgroundColor: 'black',
      color: 'white',
      position: 'fixed', // Fixed position at the top
      top: 0, // Ensures it stays at the top
      width: '100%', // Full width of the page
      zIndex: 1000, // Ensures it appears above other elements
      borderBottom:"rgba(190, 182, 182, 0.22)"
    },
    navbarLogo: {
      flex: 1,
    },
    logoImg: {
      height: '40px',
      width: 'auto',
    },
    navbarLinks: {
      flex: 2,
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      transition: '0.3s',
    },
    navbarLinksMobile: {
      display: 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '90px',
      left: 0,
      right: 0,
      backgroundColor: 'black',
      padding: '10px 0',
      textAlign: 'center',
      zIndex: 10,
    },
    navbarLinksActive: {
      display: 'flex',
    },
    navbarLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'color 0.3s ease',
    },
    navbarLinkHover: {
      color: '#F39C12',
    },
    navbarLogin: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: '10px', // Add margin to create space between login button and hamburger menu
    },
    loginBtn: {
      padding: '8px 16px',
      backgroundColor: 'blue',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    loginBtnHover: {
      backgroundColor: 'red',
    },
    navbarHamburger: {
      display: isMobile ? 'flex' : 'none',
      flexDirection: 'column',
      gap: '5px',
      cursor: 'pointer',
      marginLeft: '10px', // Add margin to create space between hamburger menu and login button
    },
    bar: {
      width: '25px',
      height: '3px',
      backgroundColor: 'white',
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo on the left */}
      <div style={styles.navbarLogo}>
        <Link to="/">
          {/* <img src={img} alt="Logo" style={styles.logoImg} /> */}
          <Lottie animationData={Task} style={{ height: '60px', width: '110px' }} />
        </Link>
      </div>
      {/* Centered navigation links */}
      <div
        style={
          isMobile
            ? isOpen
              ? { ...styles.navbarLinksMobile, ...styles.navbarLinksActive }
              : styles.navbarLinksMobile
            : styles.navbarLinks
        }
      >
        <Link
          to="/"
          style={styles.navbarLink}
          onMouseEnter={(e) => (e.target.style.color = styles.navbarLinkHover.color)}
          onMouseLeave={(e) => (e.target.style.color = styles.navbarLink.color)}
        >
          Home
        </Link>
        <Link
          style={styles.navbarLink}
          onMouseEnter={(e) => (e.target.style.color = styles.navbarLinkHover.color)}
          onMouseLeave={(e) => (e.target.style.color = styles.navbarLink.color)}
          to="/About"
        >
          About
        </Link>
        <Link
          to="/contact"
          style={styles.navbarLink}
          onMouseEnter={(e) => (e.target.style.color = styles.navbarLinkHover.color)}
          onMouseLeave={(e) => (e.target.style.color = styles.navbarLink.color)}
        >
          Contact
        </Link>

        <Link
          to="/feedback"
          style={styles.navbarLink}
          onMouseEnter={(e) => (e.target.style.color = styles.navbarLinkHover.color)}
          onMouseLeave={(e) => (e.target.style.color = styles.navbarLink.color)}
        >
          Feedback
        </Link>
      </div>
      {/* Login button on the right */}
      <div style={styles.navbarLogin}>
        <button
          style={styles.loginBtn}
          onClick={() => navigate('/loginpage')}
        >
          Login
        </button>
      </div>
      {/* Hamburger menu for mobile */}
      <div style={styles.navbarHamburger} onClick={toggleMenu}>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </div>
    </nav>
  );
};

export default Navbar;