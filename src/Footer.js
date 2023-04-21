import React , { useState, useEffect }  from "react";


function Footer() {


  const [year, setYear] = useState("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    setYear(year);
  }, []);



  return (


        <footer className="footer pt-5 mt-5">
          <div className="container py-5">

                  
                  
            <div className="row m-2">

                <div className="col-lg-4 mt-2">
                <h5>Navigation</h5>
                <ul className="list-unstyled mt-4">
                  <li><a href="#home" className="footer-link">Home</a></li>
                  <li><a href="#about-us" className="footer-link">Search</a></li>
                  <li><a href="#courses" className="footer-link">Properties</a></li>
                  <li><a href="#courses" className="footer-link">Stories</a></li>
                  <li><a href="#courses" className="footer-link">Sign-in</a></li>
                  
                </ul>
                </div>

                <div className="col-lg-4 mt-5">
                  <h5>Contact Us</h5>
                  <ul className="list-unstyled mt-4">
                    <li><a href="#home" className="footer-link">Phone:</a></li>
                    <li><a href="#about-us" className="footer-link">Email: </a></li>
                    <li><a href="#courses" className="footer-link">Address: </a></li>
                    
                  </ul>
                </div>
            

                <div className="col-lg-4 mt-5">
                  <h5>Legal</h5>
                  <ul className="list-unstyled mt-4">
                    <li><a href="#home" className="footer-link">Terms of use</a></li>
                    <li><a href="#about-us" className="footer-link">Privacy Policy </a></li>
                    <li><a href="#courses" className="footer-link">Disclaimer </a></li>
                  </ul>
                  <h5>Connect With Us</h5>
                  <ul className="list-unstyled d-flex justify-content-around mt-4 ms-0">
                    <li><a target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=2349066647086&text=Hello,%20I%27ll%20love%20to%20join%20the%20Adiz%20Academy%20Community.%20My%20name%20is%20---" className="footer-link"><i className="fab fa-whatsapp"></i></a></li>
                    <li><a target='_blank' rel='noreferrer' href="https://www.instagram.com/adizacademy/?hl=en" className="footer-link"><i className="fab fa-instagram"></i></a></li>
                    <li><a target='_blank' rel='noreferrer' href="https://twitter.com/adizacademy" className="footer-link"><i className="fab fa-twitter"></i></a></li>
                    <li><a target='_blank' rel='noreferrer' href="https://www.youtube.com/@adizacademy" className="footer-link"><i className="fab fa-linkedin"></i></a></li>
                  </ul>
                </div>

                
            </div>
           
              
            <div className='justify-content-center text-center pt-5 mt-5'>
                <small>&copy; Propview {year} &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Developed by: <a className="text-decoration-none text-dark" href="#" rel="noreferrer" target="_blank">Team Nine</a></small>
            </div>

          </div>
                    
        </footer>


  );
}

export default Footer;
