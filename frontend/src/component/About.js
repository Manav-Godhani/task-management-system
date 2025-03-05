import React from "react";
import Navebar from "./Navebar";
import Footer from "./Footer";
import Store from '../assets/Store.json';
import Lottie from "lottie-react";
import chart from '../assets/chart.json';

export default function About() {
  return (
    <>
      <Navebar />
      <div
        className="container-fluid"
        style={{
          background:
            "linear-gradient(260deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0.8716736694677871) 100%)",
          padding: "40px",
          margin: "0px",
        }}
      >
        <div className="container" style={{marginTop:"130px"}}>
          <div className="row">
            <div className="col-md-5">
              <div className="form">
                {/* <img
                  src="https://www.wrtinfotech.com/public/assets/images/blog_slider/about-2.png"
                  alt=""
                  height="500px"
                /> */}
                <Lottie
                  animationData={Store}
                  loop={true}
                  style={{marginTop:"15px"}}
                />
              </div>
            </div>

            <div className="col-md-7">
              <div className="form p-5">
                <p className="text-primary">About Us</p>
                <h3 className="text-light">
                  We Are Increasing Business Success With Technology
                </h3>
                <br />
                <p style={{ color: "grey" }}>
                  For over 5 years, we have been streamlining business
                  operations with our powerful Task Management System, catering
                  to clients worldwide.
                </p>
                <br />
                <p style={{ color: "grey" }}>
                  We are a trusted provider of task management solutions,
                  offering seamless and efficient tools that help businesses
                  stay organized, meet deadlines, and boost productivity. Our
                  system is renowned for its Quality, Reliability, and
                  Suitability, serving clients across various industries. With
                  70% of our business generated from returning clients, we take
                  pride in the trust they place in us to deliver solutions
                  tailored to their unique business needs. Our transparent
                  approach ensures that businesses can rely on us for effective
                  task management that drives success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <center>
          <h2 className="my-5 text-light">What Our Customers Are Saying?</h2>
        </center>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-7">
              <div className="form  p-5">
                <p className="text-primary">Testimonials</p>
                <h3 className="text-light">What Customers Are Saying</h3>
                <br />
                <p style={{ color: "grey" }}>
                  For over 5 years, businesses worldwide have relied on our Task
                  Management System to stay organized, meet deadlines, and drive
                  success.{" "}
                </p>
                <br />
                <p style={{ color: "grey" }}>
                  Our clients trust us because we go beyond expectations,
                  offering a solution that is not just efficient but adaptable
                  to their unique needs. We are proud to say that 70% of our
                  business comes from repeat clients, a testament to the
                  reliability and effectiveness of our services. They value our
                  transparency and our commitment to providing a seamless
                  experience that enhances productivity. Whether it’s
                  simplifying complex tasks or improving team collaboration, our
                  Task Management System continues to deliver results that keep
                  our clients coming back.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form">
                <img
                  src="https://www.wrtinfotech.com/public/assets/images/testimonial/testimonial-2.png"
                  alt=""
                  height="482"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-5">
              <div className="form">
                {/* <img
                  src="https://imgs.search.brave.com/Cl8uIq8yLC_CQ9d8Uo2nqAR-F2UIhlH0rgsnJ3w8_0k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTAvQmFy/LUNoYXJ0LVBORy1Q/aG90by5wbmc"
                  alt="Graphics and Task Management"
                  height="500px"
                /> */}
                <Lottie
                  animationData={chart}
                  loop={true}
                  style={{marginTop:"15px"}}
                />
              </div>
            </div>

            <div className="col-md-7">
              <div className="form p-5">
                <p className="text-primary">Advantages of Chart</p>
                <h3 className="text-light">
                  Empowering Creativity and Efficiency with Graphics
                </h3>
                <br />
                <p style={{ color: "grey" }}>
                  For over 5 years, we have been enhancing project workflows
                  with our innovative Task Management System, tailored for
                  creative professionals and graphic designers.
                </p>
                <br />
                <p style={{ color: "grey" }}>
                  We pride ourselves on being a leading provider of task
                  management solutions, delivering tools that enable graphic
                  designers to organize projects, meet tight deadlines, and
                  boost productivity. Our system is celebrated for its
                  User-Friendly Interface, Seamless Collaboration, and
                  Customizability, serving clients in various creative fields.
                  With 70% of our business derived from loyal clients, we are
                  honored by the confidence they place in us to provide tailored
                  solutions that cater to their unique creative processes. Our
                  commitment to transparency ensures that creatives can depend
                  on us for effective task management that enhances their
                  artistic success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <center>

          
          {/* <div className="container-fluid my-5">
            <div className="row">
              <div className="col-md-12">
                <div className="form p-0">
                  <p className="text-primary">SOLUTIONS</p>
                  <h3 className="text-light">
                    Over 5+ Years IT & Technology Solutions Includes
                  </h3>
                  <br />
                  <div className="container-fluid my-5">
                    <img
                      src="https://imgs.search.brave.com/vkwnlFZuaYT4uKrgVmyCDDzsF5X8K_Io8LOue7_e6JY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzYxLzczLzc1/LzM2MF9GXzQ2MTcz/NzU2NV9QS1V4T2Jp/dGV0UzJaV0pSaDd6/UVR3WFBZZVJGS1Yx/Ny5qcGc"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </center>
      </div>

      <Footer/>

      {/* <footer className="text-light py-4" style={{ backgroundColor: "black" }}>
        <div className="container text-center">
          <p className="mb-0">© 2024 Task Management System </p>
        </div>
      </footer> */}
    </>
  );
}
