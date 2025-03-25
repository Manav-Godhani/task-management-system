import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Lottie from "lottie-react";
import formimg1 from "../assets/mainimg.json";
import Moving from "../assets/Waves2.json";
import login2 from "../assets/login2.json";
import { IoArrowBack } from "react-icons/io5";

import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../Firebase/firebase";

function StudentLogin() {
  const [data, setData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Firebase email/password login
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      // Refresh user data
      await user.reload();

      if (user.emailVerified) {
        setSuccessMsg("Login successful!");
        localStorage.setItem("studentlogin", true);
        setTimeout(() => {
          navigate("/studentdash");
        }, 1500);
      } else {
        setErrorMsg("Please verify your email before logging in.");
      }
    } catch (error) {
      console.error("Login Error:", error.message);
      setErrorMsg("Invalid email or password.");
    } finally {
      setIsLoading(false);
    }
  };

  const resendVerificationEmail = async () => {
    try {
      const user = auth.currentUser;
      if (user && !user.emailVerified) {
        await sendEmailVerification(user);
        setSuccessMsg("Verification email sent! Please check your inbox.");
      } else {
        setErrorMsg("Please log in first.");
      }
    } catch (error) {
      console.error("Resend Verification Error:", error.message);
      setErrorMsg("Failed to send verification email.");
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
              <IoArrowBack />
            </button>
          </Link>

          <div className="main-container">
            <Lottie animationData={Moving} style={{ position: "absolute", width: "100%", height: "auto", top: 0, left: 0, zIndex: -1 }} />
          </div>

          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="parent-container">
              <div className="child-container d-flex">
                <div className="form-container p-4">
                  <h2 className="text-center mb-4 text-alg text-dark">Student Login</h2>
                  {successMsg && <div className="alert alert-success">{successMsg}</div>}
                  {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 mt-1">
                      <label className="text-dark" htmlFor="email">Email address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        className="form-control mt-4"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="mb-5 mt-3">
                      <label className="text-dark" htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="form-control mt-3"
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                        required
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </div>
                  </form>

                  <center>
                    <h6 className="mt-4">
                      New Student?{" "}
                      <Link to="/studentresgister" className="text-primary">
                        Click here to enroll
                      </Link>
                    </h6>
                  </center>

                  <center>
                    <button onClick={resendVerificationEmail} className="btn btn-light text-light mt-2">
                      Resend Verification Email
                    </button>
                  </center>
                </div>

                <div className="image-container">
                  <Lottie animationData={login2} className="image-animation" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

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
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(-100px);
          border-radius: 12px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          padding: 40px;
        }
        .child-container {
          display: flex;
        }
        .form-container {
          flex: 4;
          background: white;
          padding: 20px;
          border-radius: 0px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .image-container {
          flex: 6;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .btn {
          background-color: #007BFF;
          border: none;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: #0056B3;
        }
        @media (max-width: 768px) {
          .parent-container {
            width: 90%;
          }
          .child-container {
            flex-direction: column;
          }
          .image-animation {
            width: 80%;
          }
        }
      `}</style>
    </>
  );
}

export default StudentLogin;
