import React from 'react';
import '../css/popupForm.css'; // Import the CSS file

const PopupForm = ({ onClose }) => {
  return (
    <div className="popup-overlay show">
      <div className="popup-form">
        <div className="popup-header">
          <h2 className="popup-title">Register for Updates</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="popup-body">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <button type="submit">Register</button>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
