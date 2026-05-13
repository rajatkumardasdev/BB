import "react";
// import logo from "../assets/download.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">

        <div className="container">

          {/* Top Footer */}
          <div className="row align-items-center gy-3">

            {/* Logo */}
            <div className="col-lg-3 col-md-12 text-center text-lg-start">
              {/* <img src={logo} alt="logo" className="footer-logo" /> */}

              <p className="footer-tagline mt-2">
                Tarakki Ka Naya Tareeka
              </p>
            </div>

            {/* Menu */}
            <div className="col-lg-6 col-md-12">
              <ul className="footer-menu">

                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Blogs & News</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Lending Partners</a></li>

              </ul>
            </div>

            {/* Play Store */}
            <div className="col-lg-3 col-md-12 text-center text-lg-end">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="playstore"
                className="playstore-btn"
              />
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="footer-bottom">

            <p>
              Copyright © BlackBuck Limited
            </p>

            {/* Social Icons */}
            <div className="social-icons">

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>

            </div>

            <p>
              All Rights Reserved | Terms and Conditions | Privacy Policy
            </p>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;