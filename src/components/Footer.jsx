import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>INFORMATION</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>TOP ITEMS</h3>
            <ul>
              <li><a href="#burrata">Burrata Pizza</a></li>
              <li><a href="#cheese">Cheese Pizza</a></li>
              <li><a href="#italian">Italian Pizza</a></li>
              <li><a href="#burger">Sollow Burger</a></li>
              <li><a href="#double-cheese">Double Cheese Pizza</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#shipping">Shipping Policy</a></li>
              <li><a href="#returns">Returns Policy</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#account">My Account</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>SOCIAL MEDIA</h3>
            <p>Signup and get exclusive offers and coupon codes</p>
            <div className="footer-email">
              <input type="email" placeholder="Your Email..." />
              <button>&rarr;</button>
            </div>
            <div className="social-icons">
              <a href="#facebook" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#instagram" className="social-icon"><FontAwesomeIcon icon= {faInstagram} /></a>
              <a href="#other" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Pizzalicious all Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
