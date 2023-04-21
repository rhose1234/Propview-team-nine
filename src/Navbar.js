import React from 'react';
// import logo from './img/logo.png';

const Navbar = () => {
  return (
 
    <nav className="navbar navbar-expand-xl navbar-dark fixed-top">
      <div className="container m-3">
         <a href="./" className="navbar-brand fw-bold"><img src="" alt="logo"/></a>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>

        <div className="offcanvas offcanvas-end" id="navbarOffcanvas" tabIndex="-1" aria-labelledby="offcanvasNavbarLabel" >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-dark" id="offcanvasNavbarLabel">
              <a href="./" className="navbar-brand fw-bold"> <img src="" alt="logo" /> </a>
            </h5>
            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas"  aria-label="Close" ></button>
          </div>
          <div className="offcanvas-body">
            <div className="navbar-nav ms-auto  ">
            <a className="text-dark fw-bold nav-item nav-link active" aria-current="page" href="./">Home</a>
              <a className="text-dark fw-bold nav-item nav-link" href="#search">Search</a>
              <a className="text-dark fw-bold nav-item nav-link" href="#properties">Properties</a>
              <a className="text-dark fw-bold nav-item nav-link" href="#stories">Stories</a>
              
              <a className=" signup-btn text-dark fw-bold nav-item nav-link" target='_blank' rel='noreferrer' href="">Sign-up</a>
             
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    
  );
};

export default Navbar;
