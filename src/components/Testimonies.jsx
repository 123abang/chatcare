import React from 'react';
import '../css/testimonies.css';
import { FaTwitter, FaGlobe, FaTelegram } from 'react-icons/fa';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const testimonies = [
  {
    id: 1,
    name: 'Tripcat',
    img: require('../images/cat cat.jpg'),
    description: 'Chat-Care provided exceptional service for our project. Highly recommend!',
    rating: 4, // Rating out of 5
    social: {
      twitter: 'https://twitter.com/clientone',
      // linkedin: 'https://linkedin.com/in/clientone',
      // facebook: 'https://facebook.com/clientone',
      website: 'https://clientone.com',
      telegram: 'https://t.me/clientone'
    }
  },
  {
    id: 2,
    name: 'ICE-TEA',
    img: require('../images/ice (1).jpg'),
    description: 'Professional and reliable. Great experience working with Chat-Care!',
    rating: 4.5, // Rating out of 5
    social: {
      twitter: 'https://twitter.com/clienttwo',
      // linkedin: 'https://linkedin.com/in/clienttwo',
      // facebook: 'https://facebook.com/clienttwo',
      website: 'https://clienttwo.com',
      telegram: 'https://t.me/clienttwo'
    }
  },
  {
    id: 3,
    name: 'Fluffcoin',
    img: require('../images/fluff.jpg'),
    description: 'I acknowledge the fact that Chat-Care was the team behind my website development.',
    rating: 5, // Rating out of 5
    social: {
      twitter: 'https://twitter.com/fluffcoin',
      // linkedin: 'https://linkedin.com/in/fluffcoin',
      // facebook: 'https://facebook.com/fluffcoin',
      website: 'https://fluffcoin.com',
      telegram: 'https://t.me/fluffcoin'
    }
  },
  // Add more client testimonies here
];

const Testimonies = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star-icon" />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star-icon" />);
    }

    while (stars.length < 5) {
      stars.push(<FaStar key={`empty-${stars.length}`} className="star-icon empty" />);
    }

    return stars;
  };

  return (
    <div className="testimonies-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonies-container">
        {testimonies.map((testimony) => (
          <div key={testimony.id} className="testimony-box">
            <div className="client-info">
              <img src={testimony.img} alt={testimony.name} className="client-image" />
              <h3 className="client-name">{testimony.name}</h3>
            </div>
            <div className="rating-container">
              {renderStars(testimony.rating)}
            </div>
            <p className="client-description">{testimony.description}</p>
            <div className="social-links">
              <a href={testimony.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              {/* <a href={testimony.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a> */}
              {/* <a href={testimony.social.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a> */}
              <a href={testimony.social.website} target="_blank" rel="noopener noreferrer">
                <FaGlobe className="social-icon" />
              </a>
              <a href={testimony.social.telegram} target="_blank" rel="noopener noreferrer">
                <FaTelegram className="social-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
