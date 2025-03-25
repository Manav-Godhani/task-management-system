import React from "react";
import Footer from "./Footer";
import Navbar from "./Navebar";
import Lottie from "lottie-react";
import Location from "../assets/location.json";
import Phone from "../assets/phone.json";
import Email from "../assets/Email.json";
import imagebck2 from "../assets/imagebck2.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import slide1 from "../assets/slider1.jpg";
import slide2 from "../assets/slider2.jpg";
import slide3 from "../assets/slider3.jpg";
const Contact = () => {
  document.title="AVAM-Cntact"
  return (
    <>
      <div className="container-fluid m-0 p-0" style={{ marginTop: "100px" }}>
        <Navbar />
      </div>
      {/* Carousel Section with Captions */}
      <div className="container-fluid p-0 my-5">
        <Carousel fade interval={2000}>
          <Carousel.Item>
            <img className="d-block w-100 mt-5" src={slide1} alt="First slide" style={{ height: "500px", objectFit: "cover" }} />
            <Carousel.Caption>
              <h3>First Slide Title</h3>
              <p>Some description for the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 mt-5" src={slide2} alt="Second slide" style={{ height: "500px", objectFit: "cover" }} />
            <Carousel.Caption>
              <h3>Second Slide Title</h3>
              <p>Some description for the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 mt-5" src={slide3} alt="Third slide" style={{ height: "500px", objectFit: "cover" }} />
            <Carousel.Caption>
              <h3>Third Slide Title</h3>
              <p>Some description for the third slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6" style={{ marginTop: "100px" }}>
            <h2 className="text-primary">Contact Us</h2>
            <h1 className="mb-4">GET IN TOUCH WITH US</h1>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className="mb-4">
              <div className="d-flex align-items-start mb-3">
                <Lottie animationData={Location} loop={true} style={{ height: "80px" }} />
                <div>
                  <strong>Our Location</strong>
                  <p>B-101 IBC Block 2, Surat</p>
                  <p>395004, India</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <Lottie animationData={Phone} loop={true} style={{ height: "80px" }} />
                <div className="mt-3">
                  <strong>Phone Number</strong>
                  <p>(+91) 84888 12260</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <Lottie animationData={Email} loop={true} style={{ height: "80px" }} />
                <div className="mt-3">
                  <strong>Email Address</strong>
                  <p>info@taskmanagementsys.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ marginTop: "130px", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                overflow: "hidden",
              }}
            >
              <Lottie
                animationData={imagebck2}
                loop={true}
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "90%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="p-4" style={{ backgroundColor: "rgba(11, 26, 237, 0)" }}>
              <form className="my-3">
                <input type="text" className="form-control mb-3" placeholder="Your Name" required/>
                <input type="email" className="form-control mb-3" placeholder="Your Email" required/>
                <input type="tel" className="form-control mb-3" placeholder="Your Phone" />
                <textarea className="form-control mb-4" placeholder="Your Message" rows={5}></textarea>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <iframe
        title="hello"
        className="mt-5 p-4"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8665974639066!2d72.7666429754698!3d21.15770658333683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dfa683dd4f1%3A0xb3172139ae72a228!2sInternational%20Business%20Center!5e0!3m2!1sen!2sin!4v1740418046971!5m2!1sen!2sin"
        width="100%"
        height="600vh"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="container-fluid m-0 p-0 mt-5">
        <Footer />
      </div>
    </>
  );
};
export default Contact;