import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Moving from "../assets/moving.json";
import Lottie from 'lottie-react';
import { IoArrowBack } from 'react-icons/io5'; // Importing the back arrow icon
import BCK from '../assets/Waves2.json';

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <Link to="/">
        <button
          className="btn btn-light"
          style={{
            borderRadius: '50%',
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            transition: 'all 0.3s ease-in-out',
            fontSize: '24px',
          }}
        >
          <IoArrowBack /> {/* Render the back arrow icon */}
        </button>
      </Link>

      {/* Lottie background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <Lottie animationData={BCK} loop={true} />
      </div>

      <div className="container">
  <div className="row">
    <div className="col-md-6 my-5">
      <form
        className="form p-4"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          color: 'white',
        }}
      >
        <img
          src="https://img.freepik.com/free-vector/consulting-concept-illustration_114360-2559.jpg"
          className="form-control mb-3"
          style={{ borderRadius: '10px' }}
          alt="Admin"
        />
        <Link to="/adminlogin">
          <button
            className="btn btn-primary mt-3 p-2 w-100"
            style={{
              borderRadius: '10px',
              background: 'rgba(31, 58, 147, 0.9)',
              border: 'none',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Are You Admin? ➡️
          </button>
        </Link>
      </form>
    </div>

    <div className="col-md-6 my-5">
      <form
        className="form p-4"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          color: 'white',
        }}
      >
        <img
          src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg"
          className="form-control mb-3"
          style={{ borderRadius: '10px' }}
          alt="Student"
        />
        <Link to="/studentlogin">
          <button
            className="btn btn-primary mt-3 p-2 w-100"
            style={{
              borderRadius: '10px',
              background: 'rgba(31, 58, 147, 0.9)',
              border: 'none',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Are You Student? ➡️
          </button>
        </Link>
      </form>
    </div>
  </div>
</div>

    </>
  );
}
