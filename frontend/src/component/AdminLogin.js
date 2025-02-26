import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Lottie from "lottie-react";
import formimg1 from "../assets/mainimg.json";
import Moving from "../assets/Waves2.json";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; // Importing the back arrow icon

function AdminLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false); // State to control loader visibility
  const [errorMsg, setErrorMsg] = useState(""); // State for error message
  const [successMsg, setSuccessMsg] = useState(""); // State for success message
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000", data);
      console.log(response);
      if (response.data.success) {
        setSuccessMsg("Login successful! Redirecting to Admin Dashboard...");
        setErrorMsg(""); // Clear any previous error message
        localStorage.setItem("adminlogin", true);
        // Show the loader for 2 seconds before navigating
        setShowLoader(true);
        setTimeout(() => {
          setShowLoader(false);
          navigate("/viewtask"); // Navigate after the loader is hidden
        }, 2000);
      } else {
        setErrorMsg("Wrong email or password!"); // Set error message
        setSuccessMsg(""); // Clear any previous success message
      }
    } catch (e) {
      console.log(e);
      setErrorMsg("Invalid Information Provided!"); // Set error for server issues
      setSuccessMsg(""); // Clear any previous success message
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading || showLoader ? (
        <Loader />
      ) : (
        <>
          <Link to="/loginpage">
            <button
              className="btn btn-light"
              style={{
                borderRadius: "50%",
                background: "transparent",
                border: "none",
                boxShadow: "none",
                transition: "all 0.3s ease-in-out",
                fontSize: "24px",
              }}
            >
              <IoArrowBack /> {/* Render the back arrow icon */}
            </button>
          </Link>
          <div className="main-container">
            <Lottie
              animationData={Moving}
              style={{
                position: "absolute",
                width: "100%",
                height: "auto",
                top: 0,
                left: 0,
                zIndex: -1,
              }}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="parent-container">
              <div className="child-container d-flex">
                {/* Left Image */}
                <div className="image-container">
                  <Lottie
                    animationData={formimg1}
                    className="image-animation"
                  />
                </div>
                {/* Right Form */}
                <div className="form-container p-4">
                  <h2 className="text-center mb-4 text-alg text-dark">
                    Admin Login
                  </h2>
                  {/* Display success alert if login is successful */}
                  {successMsg && (
                    <div className="alert alert-success">{successMsg}</div>
                  )}
                  {/* Display error alert if there's an error */}
                  {errorMsg && (
                    <div className="alert alert-danger">{errorMsg}</div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 mt-1">
                      <label className="text-dark" htmlFor="email">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        className="form-control mt-4"
                        value={data.email}
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="mb-5 mt-3">
                      <label className="text-dark" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="form-control mt-3"
                        value={data.password}
                        onChange={(e) =>
                          setData({ ...data, password: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary w-100">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Inline CSS for styling */}
      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        .main-container {
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
        }
        .parent-container {
          width: 70%;
          max-width: 1200px;
          height: auto;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(-100px);
          border-radius: 12px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px;
        }
        .child-container {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .image-container {
          flex: 6;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .text-alg {
          margin-top: 100px;
        }
        .image-animation {
          width: 100%;
          height: auto;
        }
        .form-container {
          flex: 4;
          background: white;
          padding: 20px;
          border-radius: 0px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .btn {
          background-color: #007bff;
          border: none;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: #0056b3;
        }
        @media (max-width: 768px) {
          .parent-container {
            height: auto;
            width: 90%;
            flex-direction: column;
          }
          .child-container {
            flex-direction: column;
          }
          .form-container {
            padding: 15px;
          }
          .image-animation {
            width: 80%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
export default AdminLogin;
