import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <h2>Support</h2>
        <ul>
          <li><a href="#">Support Center</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>About GameFly</h2>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Affiliate Program</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Give GameFly</h2>
        <ul>
          <li><a href="#">Buy Gift Certificate</a></li>
          <li><a href="#">Redeem Gift Certificate</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Share GameFly</h2>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
     
    </footer>
  );
}

export default Footer;
