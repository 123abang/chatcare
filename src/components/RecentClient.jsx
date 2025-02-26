import React from 'react';
import '../css/recentclients.css';

const clients = [
  { id: 1, name: 'BIMBO', img: require('../images/bimbo.jpg') },
  { id: 2, name: 'TRIPCAT', img: require('../images/cat cat.jpg') },
  { id: 3, name: 'DONKEY COIN', img: require('../images/donnky coin.jpg') },
  { id: 4, name: 'OCEAN DOG', img: require('../images/ocean dog.jpg') },
  { id: 5, name: 'SHIBARIO', img: require('../images/shibario.jpg') },
  { id: 6, name: 'FAITH COIN', img: require('../images/faith coin.jpg') },
  { id: 7, name: 'FLUFFCOIN', img: require('../images/fluff.jpg') },
  { id: 8, name: 'ICE-TEA', img: require('../images/ice (1).jpg') },


];

const RecentClients = () => {
  // Duplicating the clients array to create a seamless loop
  const clientsDuplicated = [...clients, ...clients];

  return (
    <div className="recent-clients-section">
      <h2 className="section-title">Our Recent Clients</h2>
      <div className="marquee-container">
        <div className="marquee">
          {clientsDuplicated.map((client) => (
            <div key={client.id} className="client-box">
              <img src={client.img} alt={client.name} className="client-image" />
              <p className="client-name">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentClients;
