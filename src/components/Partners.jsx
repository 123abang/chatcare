import React from 'react';
import '../css/partners.css'; // Import the CSS file for styling
import partnersimg1 from '../images/DEXTools.png'
import img2 from '../images/x.png'
import img3 from '../images/telerm.png'
import img4 from '../images/discord.png'
import img5 from '../images/kisspng-reddit-logo-computer-icons-reddit-alien-5b16a57b946c57.285836041528210811608.png'

const Partners = () => {
    return (
        <section id="our-partners" className="our-partners">
            <div className="container">
                <h2>Our Partners</h2>
                <div className="partners-gallery">
                    <img src={partnersimg1}alt="Partner 1" className="partner-image"/>
                    <img src={img2}alt="Partner 1" className="partner-image"/>
                    <img src={img3}alt="Partner 1" className="partner-image"/>
                    <img src={img4}alt="Partner 1" className="partner-image"/>
                    <img src={img5}alt="Partner 1" className="partner-image"/>

                    {/* Add more partner images as needed */}
                </div>
            </div>
        </section>
    );
};

export default Partners;
