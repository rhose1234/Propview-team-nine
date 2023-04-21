import React from 'react';
import logo from './img/logo.png';

const Navbar = () => {
  return (
 
    <nav className="navbar navbar-expand-xl navbar-dark fixed-top">
      <div className="container m-3">
        <a href="./" className="navbar-brand fw-bold"><img src={logo} alt="logo"/></a>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>

        <div className="offcanvas offcanvas-end" id="navbarOffcanvas" tabIndex="-1" aria-labelledby="offcanvasNavbarLabel" >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-dark" id="offcanvasNavbarLabel">
              <a href="./" className="navbar-brand fw-bold"> <img src={logo} alt="logo" /> </a>
            </h5>
            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas"  aria-label="Close" ></button>
          </div>
          <div className="offcanvas-body">
            <div className="navbar-nav ms-auto  ">
            <a className="text-dark fw-bold nav-item nav-link active" aria-current="page" href="./">Home</a>
              <a className="text-dark fw-bold nav-item nav-link" href="#about-us">About Us</a>
              <a className="text-dark fw-bold nav-item nav-link" href="#courses">Our Courses</a>
              <a className="text-dark fw-bold nav-item nav-link" href="#FAQs">FAQs</a>
              <a className="text-dark fw-bold nav-item nav-link" target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=2349066647086&text=Hello,%20I%27ll%20love%20to%20join%20the%20Adiz%20Academy%20Community.%20My%20name%20is%20---">Join Our Community</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    
  );
};

export default Navbar;
