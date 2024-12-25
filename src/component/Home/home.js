import React from 'react';
import './home.css';

const Home = () => {
    return (
        <>
            {/* Main Content */}
            <section id="home" className="section" aria-labelledby="home-heading">
                <div className="Homecontent">
                    {/* Logo or Main Image */}
                    <img 
                        src="https://www.expertlawfirm.com/wp-content/uploads/2023/07/AdobeStock_571762531-1024x585.jpg" 
                        alt="Welcome to Deenis Law Chamber"  
                        width="70%" 
                        loading="lazy"
                    />
                    {/* Text Content */}
                    <div className="text">
                        <h1 id="home-heading">Welcome to Deenis Law Chamber</h1>
                        <p>
                            At <strong>Deenis Law Chamber</strong>, we specialize in providing comprehensive legal services with a client-focused approach. 
                            Backed by years of expertise in various fields of law, our team of skilled professionals is committed to assisting individuals, 
                            businesses, and organizations in navigating complex legal challenges with confidence and clarity.
                        </p>
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to deliver <strong>top-notch legal advice</strong> and representation tailored to each client's unique needs. 
                            We aim to build long-lasting relationships based on trust, transparency, and exceptional results.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
