import React from 'react';
import '../css/whychooseus.css';
import { FaUserTie, FaMoneyBillWave, FaStar, FaBox } from 'react-icons/fa';

const features = [
  {
    id: 1,
    title: 'Professional and Experienced Personnel',
    description: 'Our team is filled with professional and highly experienced managers and moderators who have worked and proven on several projects.',
    icon: <FaUserTie />
  },
  {
    id: 2,
    title: 'Budget Friendly',
    description: 'Our services are budget friendly, we charge based on the scope of the project and what you’re trying to achieve.',
    icon: <FaMoneyBillWave />
  },
  {
    id: 3,
    title: 'High Repute',
    description: 'Our team is filled with managers, moderators and Developers of high repute in the Chat-Care space.',
    icon: <FaStar />
  },
  {
    id: 4,
    title: 'Comprehensive Service',
    description: 'Why hire different people? At Chat-Care, we offer an all-in-one service where once you hire from us, we provide all the services you need.',
    icon: <FaBox />
  }
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-box">
            <div className="icon-container">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
