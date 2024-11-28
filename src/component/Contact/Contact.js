import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        phone: '',
        email: ''
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            setResponseMessage(result.message);
            setFormData({ name: '', location: '', phone: '', email: '' });
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('Error submitting form');
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="contact-container">
                <h1>Contact Us</h1>
                
                {/* Aligning Contact Form and Google Map side by side */}
                <div className="row contact-form-map">
                    <div className="col-md-6">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.38823234797!2d77.10821507533842!3d28.707941475623688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01b5c457db7d%3A0xdc9a68f2a2b809a8!2sShake%20karo!5e0!3m2!1sen!2sin!4v1731132174519!5m2!1sen!2sin" 
                            width="800" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="col-md-6">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h2>Let’s Get In Touch</h2>
                            <p>We will solve your problems</p>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Telephone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
                        {responseMessage && <p className="response-message">{responseMessage}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
