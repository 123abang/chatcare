import React, { useEffect, useRef, useState } from 'react';
import '../css/discuss.css'; // Import your custom CSS file
import { FaTwitter, FaThumbsUp, FaRetweet, FaEye, FaComments } from 'react-icons/fa'; // Import the icons

const DiscussSection = () => {
  const [hasCounted, setHasCounted] = useState(false);
  const sectionRef = useRef(null);
  const tweetsRef = useRef(null);
  const likesRef = useRef(null);
  const retweetsRef = useRef(null);
  const viewsRef = useRef(null);
  const chatsRef = useRef(null);

  const counters = [
    { ref: tweetsRef, end: 20089 },
    { ref: likesRef, end: 301443 },
    { ref: retweetsRef, end: 301443 },
    { ref: viewsRef, end: 44456667 },
    { ref: chatsRef, end: 406333 },
  ];

  const startCount = (element, end) => {
    let start = 0;
    const duration = 5000; // Duration in ms for the count to complete
    const stepTime = 50; // Interval in ms
    const increment = Math.ceil(end / (duration / stepTime)); // Increment per interval

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      element.textContent = start.toLocaleString();
    }, stepTime);
  };

  const handleScroll = () => {
    if (hasCounted) return;

    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        counters.forEach(({ ref, end }) => {
          if (ref.current && !hasCounted) {
            startCount(ref.current, end);
          }
        });
        setHasCounted(true); // Ensure counting happens only once
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check if the section is already in view on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasCounted]);

  return (
    <div className="discuss-section" ref={sectionRef}>
      <h2 className="section-title">Let's Discuss What Your Project Needs</h2>
      <p className="section-text">
        Book an appointment with us and we will provide expert advice and services just for you.
      </p>
      <button className="book-call-btn">
        <i className="fas fa-phone"></i> Book a Call
      </button>
      <br /><br />
      <div className="stats">
        <div className="stat-item">
          <FaTwitter size={24} />
          <span className="stat-number" ref={tweetsRef}>0</span>
          <p>Tweets</p>
        </div>
        <div className="stat-item">
          <FaThumbsUp size={24} />
          <span className="stat-number" ref={likesRef}>0</span>
          <p>Likes</p>
        </div>
        <div className="stat-item">
          <FaRetweet size={24} />
          <span className="stat-number" ref={retweetsRef}>0</span>
          <p>Retweets</p>
        </div>
        <div className="stat-item">
          <FaEye size={24} />
          <span className="stat-number" ref={viewsRef}>0</span>
          <p>Total Views</p>
        </div>
        <div className="stat-item">
          <FaComments size={24} />
          <span className="stat-number" ref={chatsRef}>0</span>
          <p>Chat Counts</p>
        </div>
      </div>
    </div>
  );
};

export default DiscussSection;