import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const Services = () => {
    const services = [
        {
            id: 1, // Add a unique ID for each service
            image: "https://legalfirm.in/wp-content/uploads/2019/04/Attestation.jpg",
            title: "Documentation and Attestation Services",
            description: "Reliable documentation and attestation services for secure, hassle-free authentication of your important documents.",
            date: "November 4, 2021",
            alt: "Estate planning attorney for high-net-worth individual",
        },
        {
            id: 2,
            image: "https://pinnacle.org.in/wp-content/uploads/2024/05/FSSAI-License-img1.png",
            title: "FSSAI License",
            description: "FSSAI registration and license renewal services are made easy with Online Legal India. Contact before validity ends to get continued service.",
            date: "October 30, 2021",
            alt: "FSSAI license certificate issued to ABC Foods, valid until December 2025.",
        },
        {
            id: 3,
            image: "https://tse4.mm.bing.net/th?id=OIP.Dp88AmlhRjF9h7krYXPvBQHaD3&pid=Api&P=0&h=180",
            title: "Corporate Compliance",
            description: "The term OPC Registration likely refers to the process of registering as a One Person Company (OPC), a specific type of business entity in several countries, most notably India.",
            date: "October 25, 2021",
            alt: "Corporate compliance policy document outlining ethical standards and procedures",
        },
        {
            id: 4,
            image: "https://tse4.mm.bing.net/th?id=OIP.zzQ9q4pAFBw9jc5ysjD1GwHaEp&pid=Api&P=0&h=180",
            title: "GST Registration",
            description: "Online Legal India can flawlessly meet GST compliance for your business. Register GST with us and experience the difference.",
            date: "October 25, 2021",
            alt: "List of documents needed for GST registration including PAN, Aadhar, and proof of address.",
        },
        {
            id: 5,
            image: "https://www.getmyca.com/images/sliders/partnership%20firm.webp",
            title: "Company/LLP/Partnership Firm Registration",
            description: "We have professionals to file everything online on the ROC portal and relieve you of any burden. Click to learn.",
            date: "November 4, 2021",
            alt: "Checklist of documents needed for LLP registration including PAN and address proof.",
        },
        {
            id: 6,
            image: "https://tse2.mm.bing.net/th?id=OIP.KDnYeFFTO2YFFA7OvHkq_gHaEK&pid=Api&P=0&h=180",
            title: "Trademark Registration",
            description: "Register your trademark (brand name, logo, slogan, icon, etc.) from anywhere in India through our online registration services.",
            date: "October 30, 2021",
            alt: "Completed trademark registration application form for Brand",
        },
        {
            id: 7,
            image: "https://tse3.mm.bing.net/th?id=OIP.pARNsim_WRv1C5BEgJBjYwHaDn&pid=Api&P=0&h=180",
            title: "Debt Recovery NBFC/Bank",
            description: "Debt recovery content for NBFCs and banks should prioritize clarity, empathy, and compliance.",
            date: "October 25, 2021",
            alt: "Debt recovery letter template outlining overdue payment details",
        },
        {
            id: 8,
            image: "https://tse1.mm.bing.net/th?id=OIP.4rbAbsR5MELrFqgjpFPC2AHaEK&pid=Api&P=0&h=180",
            title: "Court Marriage",
            description: "Court marriage is a straightforward legal process that provides both parties with the benefits of a legally recognized marriage, offering protection under law.",
            date: "October 25, 2021",
            alt: "Couple submitting their court marriage application at the registrar's office",
        },
    ];

    return (
        <section id="services" className="section">
            <div className="Servicescontainer">
                <h2>Our Services</h2>
            </div>
            <div className="deals-grid">
                {services.map((service) => (
                    <div className="deal-card" key={service.id}>
                        <img src={service.image} alt={service.alt} />
                        <div className="deal-content">
                            <div className="deal-info">
                                <span>Service</span>
                                <span className="deal-date">{service.date}</span>
                            </div>
                            <div className="deal-title">{service.title}</div>
                            <div className="deal-description">{service.description}</div>
                            {/* Link to the individual service details page */}
                            <Link to={`/services/${service.id}`} className="details-button">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

