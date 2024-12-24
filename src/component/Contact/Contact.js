import React, { useState } from 'react';
import './Contact.css'; // Add your styling

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

    // Basic validation for phone number and email
    if (!formData.phone.match(/^\d{10}$/)) {
      setResponseMessage('Please enter a valid phone number');
      return;
    }

    if (!formData.email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      setResponseMessage('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('https://server-zeta-steel.vercel.app/api/contact', {  // Replace with your actual server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (!response.ok) {
        setResponseMessage(result.message || 'Error submitting form');
        return;
      }

      setResponseMessage(result.message || 'Contact saved successfully!');
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
        
        <div className="row contact-form-map">
          <div className="col-md-6">
            <iframe 
              src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_URL" 
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
                placeholder="Enter Your Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
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
            {responseMessage && <p>{responseMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
