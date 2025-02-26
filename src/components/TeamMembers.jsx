import React from 'react';
import '../css/meetourteam.css';
import { FaTwitter, FaEthereum , FaTelegram, FaCode, FaCogs, FaUserShield, FaLightbulb, FaPenNib, FaBullhorn } from 'react-icons/fa';


const teamMembers = [
  {
    id: 1,
    name: 'Dylan Scott',
    title: 'C.E.O of Chat-Care Management',
    img: require('../images/dylan.jpg'),
    skills: [
      { id: 1, name: 'Leadership', icon: <FaUserShield /> },
      { id: 2, name: 'Strategy', icon: <FaLightbulb /> }
    ],
    social: {
      twitter: 'https://x.com/dylanscottCC?t=dy8ESEvEh_bOqyQoqk7OJQ&s=09',
      telegram: 'https://t.me/DylanScotted'
    }
  },
  {
    id: 2,
    name: ' Tah',
    title: 'Head of Project Management Team',
    img: require('../images/Abang.jpg'),
    skills: [
      { id: 1, name: 'Project Management', icon: <FaCogs /> },
      { id: 2, name: 'Team Coordination', icon: <FaUserShield /> }
    ],
    social: {
      twitter: 'https://x.com/abangtah_1?s=21',
      telegram: 'https://t.me/phanton18'
    }
  },
  {
    id: 3,
    name: 'Ryder',
    title: 'Head of Moderating & Raid Team',
    img: require('../images/photo_2025-01-13_06-41-23.jpg'),
    skills: [
      { id: 1, name: 'Community Management', icon: <FaUserShield /> },
      { id: 2, name: 'Conflict Resolution', icon: <FaCogs /> }
    ],
    social: {
      twitter: 'https://x.com/Cryptoloverr01?t=7Ri0JiFjlZMI86BAP5-MRg&s=09',
      telegram: 'http://t.me/itsRyder99'
    }
  },

  {
    id: 4,
    name: 'Ellis Quinn',
    title: 'Head of Web Development Team',
    img: require('../images/Ellis.jpg'),
    skills: [
      { id: 1, name: 'Web Development', icon: <FaCode /> },
      { id: 2, name: 'Front-End Technologies', icon: <FaCode /> }
    ],
    social: {
      twitter: 'https://x.com/Ellis20008?t=q8yD2OT4d2qCA20rAnUOxg&s=09',
      telegram: 'https://t.me/Ellis_quinn'
    }
  },
  

  {
    id: 4,
    name: 'Dickson Edor',
    title: 'Head of Smart Contract Team',
    img: require('../images/dickson.jpg'),
    skills: [
      { id: 1, name: 'Smart Contracts', icon: <FaCode /> },
      { id: 2, name: 'Blockchain Technology', icon: <FaEthereum /> }
    ],
    social: {
      twitter: 'https://x.com/DicksonFilm?t=Y50_uYNO7ICO2vM9ptnXBg&s=09',
      telegram: 'https://t.me/offscott2'
    }
  },
  {
    id: 6,
    name: 'Dominic',
    title: 'Marketing Assistant and Technical Writer',
    img: require('../images/Ana.jpg'), // Make sure to add the image file for Ana Mareu in the appropriate directory
    skills: [
      { id: 1, name: 'Marketing', icon: <FaBullhorn /> },
      { id: 2, name: 'Technical Writing', icon: <FaPenNib /> }
    ],
    social: {
      twitter: 'https://x.com/abang_doms?s=21', // Replace with the actual Twitter link
      telegram: 'https://t.me/dominic29' // Replace with the actual Telegram link
    }
  }
  
];

const MeetOurTeam = () => {
  return (
    <div className="meet-our-team-section">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member-box">
            <img src={member.img} alt={member.name} className="team-member-image" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-title">{member.title}</p>
            <div className="skills-container">
              {member.skills.map((skill) => (
                <div key={skill.id} className="skill">
                  {skill.icon}
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="social-links">
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              <a href={member.social.telegram} target="_blank" rel="noopener noreferrer">
                <FaTelegram className="social-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
