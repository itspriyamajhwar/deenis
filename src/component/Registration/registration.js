import React from 'react';
import './registration.css';

const Registration = () => {
    const cards = [
        {
            badge: "Trademark Registration",
            image: "https://abounaja.com/images/trademark-registration-in-saudi-arabia.png",
            alt: "Trademark Registration",
            author: "Ankit",
            date: "December 21st, 2021",
            title: "How Do I Register My Brand Name?",
            text: "The brand name, which is a branch of Intellectual Property (IP), serves as the brand name's invincible armor...",
            link: "#"
        },
        {
            badge: "Company Registration",
            image: "https://iprani.com/wp-content/uploads/2020/04/cr-768x432.png",
            alt: "Company Registration",
            author: "Ankit",
            date: "October 31st, 2021",
            title: "How to Register a Company in India?",
            text: "India has always been a land of opportunity for businesses to thrive with a wide potential consumer base...",
            link: "#"
        },
        {
            badge: "Shares Recovery",
            image: "https://cdn.taxguru.in/wp-content/uploads/2023/06/Recovery-of-shares-300x150.jpg",
            alt: "Shares Recovery",
            author: "Ankit",
            date: "February 2nd, 2023",
            title: "Detailed Procedure for Recovery of Shares From IEPF",
            text: "Investor Education and Protection Fund are referred to as IEPF. By the provisions of Section 125 of the Companies Act 2013...",
            link: "#"
        }
    ];

    return (
        <section id="registration" className="section">
            <h1>Registration</h1>
            <div className="card-container">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <div className="badge">{card.badge}</div>
                        <img src={card.image} alt={card.alt} />
                        <div className="card-content">
                            <div className="card-info">
                                <span>👤 {card.author}</span>
                                <span>📅 {card.date}</span>
                            </div>
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-text">{card.text}</p>
                            <a href={card.link} className="read-more">READ MORE ➔</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Registration;