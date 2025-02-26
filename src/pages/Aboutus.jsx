import React from 'react';
import { FaUsers, FaHandshake, FaBullseye } from 'react-icons/fa'; // Import necessary icons
import '../css/aboutus.css';
import Navbar from '../components/nav';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <section className="about-us-section">
            <Navbar />
            <br /><br />
            <div className="container">
                <h2 className="about-us-title">About Us</h2>
                <p className="about-us-text">
                    Community Management has become one of the main challenges project owners face in the Cryptocurrency and web space today. One of the ways to identify serious projects is the quality of community management. Therefore, we at Chat-Care Managements are committed to providing quality and effective community management and Development for cryptocurrency, Web Dev, and Web3 projects.
                </p>
                <div className="about-us-icons">
                    <div className="about-us-icon">
                        <FaUsers size={50} color="#007bff" />
                        <h3>Our Team</h3>
                        <p>Our experienced team is committed to excellence and collaboration.</p>
                    </div>
                    <div className="about-us-icon">
                        <FaHandshake size={50} color="#007bff" />
                        <h3>Our Partners</h3>
                        <p>We work with leading organizations to bring the best services to our clients.</p>
                    </div>
                    <div className="about-us-icon">
                        <FaBullseye size={50} color="#007bff" />
                        <h3>Our Mission</h3>
                        <p>We aim to deliver innovative solutions that drive success for our clients.</p>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
            <Footer />
        </section>
    );
};

export default AboutUs;
