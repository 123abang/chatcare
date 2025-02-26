import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/hero.css';
import img1 from '../images/maingraphics.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <motion.div 
                    className="hero-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="hero-title" style={{ fontFamily: 'NORD-Black', fontWeight:'bold' }}>Welcome to Chat-Care Management</h1>
                    <p className="hero-subtitle">Your trusted partner in community management, web and web3 development.</p>
                    <Link to="/aboutus">
                        <button className="hero-button">Learn More</button>
                    </Link>
                </motion.div>
                <motion.div 
                    className="hero-image"
                    initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
                    animate={{ opacity: 1, x: 0 }} // Slide in to the original position
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src={img1} alt="Man" className="img1" />
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
