import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id="about" className="section" aria-labelledby="about-heading">
            <div className="about-section">
                <div className="about-text">
                    <h2 id="about-heading">About Us</h2>
                    <h3>
                        We Are Changing the Way People Think About Getting Online Legal & Taxation Services
                    </h3>
                    <p>
                        Mundra Legal Consultants LLP is an innovative online platform designed to simplify your legal and tax-related needs. 
                        Our mission is to provide accessible, accurate, and professional services to individuals and businesses.
                    </p>
                    <ul className="features-list">
                        <li>Timely and accurate reporting</li>
                        <li>Direct access to certified professionals</li>
                        <li>Dedicated offices for personalized support</li>
                        <li>Innovative problem-solving solutions</li>
                    </ul>
                    <a href="#onlineconsultant" aria-label="Read more about our services">
                        <button className="quote-button">Read More</button>
                    </a>
                </div>
                <div className="about-image">
                    <img
                        src="https://tse3.mm.bing.net/th?id=OIP.Dwp6eyS6LPW6bH-QLXRr_QHaES&pid=Api&P=0&h=180"
                        alt="Team of professionals working together"
                        width="60%"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
