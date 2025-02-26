import React from 'react';
import '../css/footer.css';
import { FaTwitter, FaTelegram,FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>
            Chat-Care offers all-in-one service solutions for your project needs. From project management to smart contract development, our experienced team is here to help.
          </p>
          <div className="footer-social">
            <a href="https://x.com/dylanscottCC?t=dy8ESEvEh_bOqyQoqk7OJQ&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
            <a href="https://t.me/ChatCareManagements" target="_blank" rel="noopener noreferrer"><FaTelegram className="social-icon" /></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p><FaEnvelope /> <a href="mailto:chatcare0@gmail.com">chatcare0@gmail.com</a></p>
          <p>123 Broadway Street, Suite 100, Nashville, United States</p>
        </div>
        <div className="footer-section newsletter">
          <h2 className="footer-title">Newsletter Signup</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chat-Care. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
