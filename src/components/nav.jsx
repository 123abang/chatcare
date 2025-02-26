import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaTelegram, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/nav.css';
import logo from '../images/LOGO-removebg-preview.png'; // Ensure this path is correct

const CustomNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <Navbar expand="lg" className="py-3">
        <Navbar.Brand href="#" className="mx-auto">
          <img src={logo} alt="logo" width="300px" className="logo" />
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-center">
          <Nav className="mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem' }}>
            <Nav.Link href="/" className="mx-3">Home</Nav.Link>
            <Nav.Link href="/services" className="mx-3">Services</Nav.Link>
            <Nav.Link href="/aboutus" className="mx-3">About Us</Nav.Link>
            <Nav.Link href="/contactus" className="mx-3">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="ml-auto d-flex align-items-center">
          <div className="d-lg-none">
            {showSidebar ? (
              <FaTimes size={24} onClick={toggleSidebar} className="menu-icon close-icon-animation" id='hamburger'/>
            ) : (
              <FaBars size={24} onClick={toggleSidebar} className="menu-icon open-icon-animation" />
            )}
          </div>
          <div className="d-none d-lg-flex" id="icons">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaFacebook size={24} />
            </a> */}
            <a href="https://x.com/dylanscottCC?t=dy8ESEvEh_bOqyQoqk7OJQ&s=09" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaTwitter size={24} />
            </a>
            <a href="https://t.me/ChatCareManagements" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaTelegram size={24} />
            </a>
          </div>
        </div>
      </Navbar>

      <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
        <div className="close-container" id='colse-icon'>
          <FaTimes size={24} onClick={toggleSidebar} className="close-icon" />
        </div>
        <Nav className="flex-column text-center mt-5">
          <Nav.Link href="/" onClick={toggleSidebar} className="my-3">Home</Nav.Link>
          <Nav.Link href="/services" onClick={toggleSidebar} className="my-3">Services</Nav.Link>
          <Nav.Link href="/aboutus" onClick={toggleSidebar} className="my-3">About Us</Nav.Link>
          <Nav.Link href="/contactus" onClick={toggleSidebar} className="my-3">Contact Us</Nav.Link>
          <div className="mt-4">
            <a href="https://x.com/dylanscottCC?t=dy8ESEvEh_bOqyQoqk7OJQ&s=09" target="_blank" rel="noopener noreferrer" className="mx-3">
              <FaTwitter size={30} />
            </a>
            <a href="https://t.me/ChatCareManagements" target="_blank" rel="noopener noreferrer" className="mx-3">
              <FaTelegram size={30} />
            </a>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default CustomNavbar;
