import React from 'react';
import '../css/ourservices.css';
import { FaClock, FaPen, FaRobot, FaTwitter, FaCode, FaHandshake, FaComments, FaHeadset, FaBullhorn, FaChartLine } from 'react-icons/fa';
import Navbar from '../components/nav'
import Footer from '../components/Footer';

const services = [
  {
    id: 1,
    title: '24 Hours Community Moderation',
    description: 'Our community managers and moderators provide 24-hour coverage, ensuring no room for unhealthy behaviors and conversations.',
    icon: <FaClock />
  },
  {
    id: 2,
    title: 'Narratives',
    description: 'We help write or rewrite projects, create unique names, catchy narratives, ad copies, Pinksale profile copy, and Telegram chat welcome messages.',
    icon: <FaPen />
  },
  {
    id: 3,
    title: 'Telegram Bot Set-Up',
    description: 'Full setup of bots for project owners needing this service.',
    icon: <FaRobot />
  },
  {
    id: 4,
    title: 'Social Media Management / Twitter Management',
    description: 'Professional DeFi social media managers handle your project’s socials for maximum visibility and output.',
    icon: <FaTwitter />
  },
  {
    id: 5,
    title: 'Web Development',
    description: 'Creating modern and responsive websites tailored to your business needs.',
    icon: <FaCode />
  },
  {
    id: 6,
    title: 'Smart Contract Development',
    description: 'Building decentralized applications and integrating blockchain solutions.',
    icon: <FaCode />
  },
  {
    id: 7,
    title: 'Shilling / Engagements',
    description: 'A group of 70-100 human shillers to promote your project on Twitter/X, Telegram, and engage with posts.',
    icon: <FaHandshake />
  },
  {
    id: 8,
    title: 'Engagers / Chatters',
    description: 'Engagers/Chatters keep your community active and foster conversations 24/7 based on your needs.',
    icon: <FaComments />
  },
  {
    id: 9,
    title: 'AMA / VC / Space Hosting',
    description: 'Experienced AMA/Space hosts knowledgeable in the space.',
    icon: <FaHeadset />
  },
  {
    id: 10,
    title: 'Marketing',
    description: 'Marketing and promo services through our partners for clients in need.',
    icon: <FaBullhorn />
  },
  {
    id: 11,
    title: 'Trending and Listing',
    description: 'Trending and listing services like CoinMarketCap and CoinGecko listings through our marketing partners.',
    icon: <FaChartLine />
  },
];

const OurServices = () => {
  return (
    
    <div className="our-services-section">
      <Navbar />
      <br /><br />
      <center>
      <h2 className="section-title">Our Services</h2>
      </center>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-box">
            <div className="icon-container">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <br /><br />
      <Footer />
    </div>
  );
};

export default OurServices;
