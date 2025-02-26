import React from "react";
import Navebar from "./component/Navebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Lottie from "lottie-react";
// import BCK2 from "./assets/BCK2.json";
import Footer from "./component/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Manavbck1 from "./assets/Manavbck1.json";
import Blackbot from "./assets/blackbot.json";
import Four from "../src/assets/four.json";

function App() {
  return (
    <div>
      <Navebar />
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh", // Full screen height
          overflow: "hidden", // Prevent overflow
          boxSizing: "border-box", // Include padding and border in dimensions
        }}
      >
        <Lottie animationData={Manavbck1} style={{}} />
        {/* Central Rectangular Box */}
        <div
          style={{
            display: "flex", // Flexbox for centering
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            position: "absolute", // Position over the animation
            top: 0,
            left: 0,
            width: "100%", // Full width
            height: "100%", // Full height
            margin: 0, // Remove any default margins
          }}
        >
          <div
            style={{
              // Semi-transparent background
              // Rounded corners
              padding: "20px 40px", // Padding inside the box
              color: "white", // Text color
              textAlign: "center", // Center text
              // Subtle shadow  boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.96)",
              maxWidth: "80%", // Ensure the box is responsive
              maxHeight: "80%", // Ensure the box is responsive
            }}
          >
            {/* <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
              Welcome to our Application
            </h1> */}
            <Lottie
              animationData={Blackbot}
              loop={true}
              style={{ height: "420px" }}
            />
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                fontFamily: "cursive",
              }}
            >
              Welcome to our Application
            </h1>
            <h6 style={{ fontSize: "16px", fontFamily: "monospace" }}>
              Your One stop solution for Manage Your task
            </h6>
            <a href="#features" className="btn btn-light btn-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image and Blur Effect */}
      

      {/* Features Section */}
      <center>
        <section
          id="features"
          className="container-fluid p-5"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "black",
          }}
        >
          <h2
            className="text-center mb-5 text-primary mt-5"
            style={{ fontSize: 40 }}
          >
            Services Provide By us
          </h2>
          <div className="row m-3" style={{ padding: 50 }}>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm hover-effect">
                <img
                  src="https://img.freepik.com/free-vector/checklist-concept-illustration_114360-339.jpg?t=st=1740038100~exp=1740041700~hmac=d650550f5b3f98b1ba19c56ea1bfc4ba9827adbd79dfcd0d100075805cbdb986&w=740"
                  className="card-img-top"
                  alt="User-Friendly Interface"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    User-Friendly Interface
                  </h5>
                  <p className="card-text p-3">
                    Our Task Management System offers a user-friendly interface
                    designed to simplify task organization and tracking. With
                    its intuitive layout, users can easily create, assign, and
                    prioritize tasks, making collaboration and productivity
                    effortless.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm hover-effect">
                <img
                  src="https://img.freepik.com/free-vector/miscommunication-concept-illustration_114360-8952.jpg?t=st=1740038205~exp=1740041805~hmac=14986a4b68ef9532b1c53dca18f359ce77de47bc850eb9e759857c8bd3faf9d3&w=740"
                  className="card-img-top"
                  alt="Task Management"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    Real-Time Collaboration
                  </h5>
                  <p className="card-text p-3">
                    Our Task Management System enables real-time collaboration,
                    allowing teams to work together seamlessly regardless of
                    location. Users can assign tasks, share updates, and provide
                    feedback instantly, ensuring that everyone stays on the same
                    page
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm hover-effect">
                <img
                  src="https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4875.jpg?t=st=1740038259~exp=1740041859~hmac=e3bd7dfd674aa34b22ed49ae593ffd13c2e3cbf2977784c7fdcbe3d48b718cb7&w=740"
                  className="card-img-top"
                  alt="Real-Time Collaboration"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Task Management</h5>
                  <p className="card-text p-3">
                    Our Task Management System streamlines the process of
                    organizing, assigning, and tracking tasks to ensure projects
                    are completed efficiently. With features like task
                    prioritization, deadline setting, and progress tracking,
                    users can manage their workload effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </center>

      <div className="container-fluid p-5 bg-black position-relative">
        <div className="row">
          <div
            className="col-md-5 position-relative"
            style={{ position: "relative" }}
          >
            <div className="form" style={{ position: "relative" }}>
              {/* Lottie Animation as Background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                  opacity: 0.5, // Adjust transparency
                }}
              >
                <Lottie animationData={Four} />
              </div>
              <img
                src="https://www.wrtinfotech.com/public/assets/images/blog_slider/about-1.png"
                alt=""
                height="500px"
                style={{ position: "relative", zIndex: 1 }}
              />
            </div>
          </div>

          <div className="col-md-7">
            <div className="form p-5">
              <p className="text-primary">Our Company</p>
              <h3 className="text-light">
                Transforming Business Efficiency with Technology
              </h3>
              <br />
              <br />
              <p style={{ color: "grey" }}>
                Our Task Management System offers numerous benefits that make it
                an essential tool in today’s fast-paced business environment:
              </p>
              <ul style={{ color: "grey" }}>
                <li>Enhanced Accountability.</li>
                <li>Real-Time Progress Tracking</li>
                <li>Streamlined Communication Facilitate</li>
                <li>Increased Flexibility</li>
                <li>Data-Driven Insights</li>
              </ul>
              <br />
              <p style={{ color: "grey" }}>
                With 70% of our business generated from returning clients, we
                pride ourselves on delivering tailored solutions that meet
                unique business needs. Our transparent approach ensures that
                businesses can rely on us for effective task management that
                drives success in real-life scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5 bg-black">
        <div className="row">
          <div className="col-md-7">
            <div className="form p-5">
              <p className="text-primary">Testimonials</p>
              <h3 className="text-light">What Our Clients Are Saying</h3>
              <br />
              <p style={{ color: "grey" }}>
                For more than 5 years, our Task Management System has been a
                trusted ally for businesses across the globe. Clients have found
                that it not only helps them stay organized but also enhances
                their ability to meet deadlines and achieve their goals
                effectively.
              </p>
              <br />
              <p style={{ color: "grey" }}>
                Our users appreciate the tailored solutions we provide, which
                adapt seamlessly to their specific workflows and challenges. An
                impressive 70% of our clients return for our services,
                reflecting the trust and satisfaction they have in our system.
                They commend our commitment to transparency and our dedication
                to ensuring a smooth user experience, which boosts team
                productivity. Whether it’s streamlining complex projects or
                facilitating better collaboration, our Task Management System
                consistently delivers the results our clients rely on.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="form">
              <img
                src="https://www.wrtinfotech.com/public/assets/images/services/single/1.jpg"
                alt=""
                height="482"
                style={{ borderRadius: 50 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer
        className=" text-white text-center py-3"
        style={{ backgroundColor: "black" }}
      >
        <p>&copy; 2024 Task-Management System. All rights reserved.</p>
      </footer> */}

      {/* Footer For Home Page */}
      <Footer />

      {/* Inline CSS for styling */}
      <style>{`
        .hero-header {
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }

        .hover-effect {
          transition: transform 0.3s;
        }

        .hover-effect:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default App;
