import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from './Navebar';
import Feedback from '../assets/feedback.json';
import Lottie from 'lottie-react';
import Footer from './Footer';
import Loader from './Loader';
const FeedbackForm = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const handleStarClick = (value) => {
    setRating(value);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userDetails.name || !userDetails.email) {
      alert('Please enter your name and email.');
      return;
    }
    // Simulate an API call (replace with actual API request)
    try {
      setShowLoader(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay
      // Simulated API response
      const response = { success: true };
      if (response.success) {
        setSuccessMsg('Feedback Submitted Successfully');
        setErrorMsg('');
        localStorage.setItem('feedback', true);
        setTimeout(() => {
          setShowLoader(false);
          navigate('/feedback');
        }, 1500);
      } else {
        setErrorMsg('Something went wrong!');
        setSuccessMsg('');
      }
      setSubmitted(true);
      setRating(0);
      setFeedback('');
      setUserDetails({ name: '', email: '', phone: '' });
    } catch (error) {
      setErrorMsg('Submission failed. Please try again.');
      setSuccessMsg('');
      setShowLoader(false);
    }
  };
  const renderStars = () => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i + 1}
        className={`star ${i + 1 <= rating ? 'active' : ''}`}
        onClick={() => handleStarClick(i + 1)}
        style={{
          cursor: 'pointer',
          fontSize: '2rem',
          color: i + 1 <= rating ? 'gold' : '#ccc',
          marginRight: '5px',
        }}
      >
        &#9733;
      </span>
    ));
  };
  return (
    <>
      {showLoader && <Loader />}
      <div className="container-fluid m-0 p-0">
        <Navbar />
      </div>
      <div className="container">
        <div className="row">
          <div className="feedback-container">
            <div className="col-md-6 p-3">
              <div className="image-container">
                <Lottie animationData={Feedback} style={{ height: '560px', width: '100%' }} />
              </div>
            </div>
            <div className="col-md-6 p-5">
              <div className="feedback-form-container">
                {submitted ? (
                  <div className="thank-you">Thank you for your feedback!</div>
                ) : (
                  <form className="feedback-form" onSubmit={handleSubmit}>
                    <center>
                      <h2 className="form-title mb-3">Provide Your Feedback</h2>
                    </center>
                    {successMsg && <p className="success-msg">{successMsg}</p>}
                    {errorMsg && <p className="error-msg">{errorMsg}</p>}
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number (Optional)"
                      value={userDetails.phone}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                    <textarea
                      placeholder="Write your feedback here..."
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      rows="5"
                      required
                      className="textarea-field"
                    ></textarea>
                    <center>
                      <b>Rate Us</b>
                    </center>
                    <center>
                      <div className="star-rating">{renderStars()}</div>
                    </center>
                    <button type="submit" className="submit-button">
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid m-0 p-0">
        <Footer />
      </div>
      <style>
        {`
          body, html {
            height: 100%;
            margin: 0;
            background: linear-gradient(to right, #141E30, #243B55);
            color: white;
          }
          .feedback-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
            margin-top: 50px;
          }
          .feedback-form-container {
            flex: 1;
            padding: 20px;
            background: rgba(34, 34, 34, 0.9);
            border-radius: 8px;
            color: white;
            width: 100%;
            max-width: 400px;
          }
          .input-field, .textarea-field {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #555;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.1);
            color: #FFFFFF;
          }
          .submit-button {
            background-color: #007BFF;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
          }
          .submit-button:hover {
            background-color: #0056B3;
          }
          .success-msg {
            color: green;
            text-align: center;
            font-weight: bold;
          }
          .error-msg {
            color: red;
            text-align: center;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};
export default FeedbackForm;