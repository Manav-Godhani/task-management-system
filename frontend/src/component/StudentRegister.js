import axios from "axios";
import React, { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import reg from "../assets/reg.json";
import Waves2 from "../assets/Waves2.json";
import { IoArrowBack } from "react-icons/io5";

const initialState = { name: "", email: "", password: "", confirmPassword: "" };
function reducer(state, action) {
  return { ...state, [action.field]: action.value };
}

function StudentRegister() {
  const navigate = useNavigate();
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [alertMsg, setAlertMsg] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    if (!formState.name || !formState.email || !formState.password || !formState.confirmPassword) {
      setAlertMsg({ message: "All fields are required", type: "danger" });
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formState.email)) {
      setAlertMsg({ message: "Invalid email format", type: "danger" });
      return false;
    }
    if (formState.password.length < 6) {
      setAlertMsg({ message: "Password must be at least 6 characters", type: "danger" });
      return false;
    }
    if (formState.password !== formState.confirmPassword) {
      setAlertMsg({ message: "Passwords must match", type: "danger" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/sturesgister", formState, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("API Response:", response.data);
      setAlertMsg({ message: "Student registered successfully!", type: "success" });
      setTimeout(() => {
        navigate("/studentlogin");
      }, 2000);
    } catch (error) {
      console.error("Error response:", error.response);
      const errorMessage = error.response?.data?.message || "Registration failed. Check your API.";
      setAlertMsg({ message: errorMessage, type: "danger" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="background-animation">
        <Lottie animationData={Waves2} loop={true} />
      </div>
      <Link to="/studentlogin">
        <button className="btn btn-light" style={{ borderRadius: "50%", background: "transparent", border: "none", boxShadow: "none", fontSize: "24px" }}>
          <IoArrowBack />
        </button>
      </Link>
      <div className="parent-container">
        <div className="card shadow-lg border-0 d-flex flex-row" style={{ width: "850px", borderRadius: "15px", zIndex: 1 }}>
          <div className="w-50 d-none d-md-block" style={{ background: "#F8F9FA", borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px" }}>
            <Lottie animationData={reg} loop={true} style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="w-50 p-4 bg-white" style={{ borderTopRightRadius: "15px", borderBottomRightRadius: "15px" }}>
            <h2 className="text-center mb-4">User Registration</h2>
            {alertMsg.message && (
              <div className={`alert alert-${alertMsg.type} alert-dismissible fade show`} role="alert">
                {alertMsg.message}
                <button type="button" className="btn-close" onClick={() => setAlertMsg({ message: "", type: "" })}></button>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" value={formState.name} onChange={(e) => dispatch({ field: "name", value: e.target.value })} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter email" value={formState.email} onChange={(e) => dispatch({ field: "email", value: e.target.value })} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Enter password" value={formState.password} onChange={(e) => dispatch({ field: "password", value: e.target.value })} required />
                  <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <div className="input-group">
                  <input type={showConfirmPassword ? "text" : "password"} className="form-control" placeholder="Confirm password" value={formState.confirmPassword} onChange={(e) => dispatch({ field: "confirmPassword", value: e.target.value })} required />
                  <button type="button" className="btn btn-outline-secondary" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? <span className="spinner-border spinner-border-sm"></span> : "Register"}
              </button>
            </form>
            <div className="text-center mt-3">
              <p>Already registered? <Link to="/studentlogin" className="text-primary">Login here</Link></p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Disable scrolling on the body */
        body {
          margin: 0;
          padding: 0;
          overflow: hidden; /* This disables both vertical and horizontal scrolling */
          height: 100%;
        }

        /* Ensure the main container fills the screen without causing overflow */
        .parent-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Make sure the container fills the full height of the viewport */
          width: 100%;
          overflow: hidden; /* Prevent scrolling */
        }

        /* Prevent overflow on the background animation container */
        .background-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden; /* This also helps prevent scrolling caused by animations */
        }

        /* Prevent scrolling inside the card container */
        .card {
          overflow: hidden; /* Prevent internal scrolling */
        }
      `}</style>
    </>
  );
}

export default StudentRegister;
