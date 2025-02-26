import React from 'react';
import { motion } from 'framer-motion';
import '../css/aboutus.css'; // Make sure to create this CSS file

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <motion.div 
        className="about-us-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-text">
          Community Management has become one of the main challenges project owners face in the Cryptocurrency and web space today. One of the ways to identify serious projects is the quality of community management. Therefore, we at Chat-Care Managements are committed to providing quality and effective community management and Development for cryptocurrency, Web Dev. and Web3 projects.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
