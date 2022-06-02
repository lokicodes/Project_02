import React from "react";
import "./About.css"
const About = () => {

  return (
    <div className="container text-dark">
      <h1 className="py-3 about-title">About the Website</h1>
      <h3 className="all-blog">This is a Blog Website created solely for amusement and educational purposes. It incorporates the use of various front and back end tech stacks like React.js, Mongodb, Bootstrap , etc...
      This website lets you pen down some very interesting blogs, which can be later edited or deleted on your command. You can also read and enjoy various other blogs written by other skilled authors.
      <br></br><br></br>Happy Blogging!</h3>
      <h1 className="py-4 about-title">About the Creators</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="card bg-transparent">
            <div className="card-body text-dark text-center">
              <h5 className="card-title">Shubham Agarwal</h5>
              <p className="card-text">
                BTech Undergrad at BIT Mesra
              </p>
              <a href="https://github.com/ag-shubham" target="_blank"> <i className="px-4 fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/shubham-agarwal-526b571b0/" target="_blank"> <i className="px-4 fa-brands fa-linkedin"></i></a>
              <a href="https://www.instagram.com/shubham_agarwaal_/" target="_blank"> <i className="px-4 fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent">
            <div className="card-body text-dark text-center">
              <h5 className="card-title">Lokesh Sharma</h5>
              <p className="card-text">
                BTech Undergrad at BIT Mesra
              </p>
              <a href="https://github.com/lokicodes" target="_blank"> <i className="px-4 fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/lokesh-sharma-42a429212/" target="_blank"> <i className="px-4 fa-brands fa-linkedin"></i></a>
              <a href="https://www.instagram.com/low_cash19/" target="_blank"> <i className="px-4 fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
