import React from 'react';
import { FaTwitter, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';
import '../../src/css/contactus.css';
import Navbar from '../components/nav';
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <section className="contact-us-section">
            <Navbar />
            <br /><br />
            <div className="container">
                <h2 className="contact-us-title">Contact Us</h2>
                <div className="contact-us-icons">
                    <a href="https://x.com/dylanscottCC?t=dy8ESEvEh_bOqyQoqk7OJQ&s=09" target="_blank" rel="noopener noreferrer" className="contact-us-icon">
                        <FaTwitter size={50} color="#1DA1F2" />
                        <h3>X (Twitter)</h3>
                        <p>Follow us on X for the latest updates.</p>
                    </a>
                    <a href="https://t.me/ChatCareManagements" target="_blank" rel="noopener noreferrer" className="contact-us-icon">
                        <FaTelegramPlane size={50} color="#0088cc" />
                        <h3>Telegram</h3>
                        <p>Join our Telegram community.</p>
                    </a>
                    <a href="mailto:chatcare0@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-us-icon">
                        <FaEnvelope size={50} color="#007bff" />
                        <h3>Email</h3>
                        <p>Contact us via email for inquiries.</p>
                    </a>
                </div>
            </div>
            <br /><br />
            <Footer />
        </section>
    );
};

export default ContactUs;
