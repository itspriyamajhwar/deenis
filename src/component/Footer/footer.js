import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-sections">
                <div className="footer-column footer-contact">
                    <h3>Contact Us</h3>
                    <p>Phone: <a href="tel:+91926558488">+91 926558488</a></p>
                    <p>Email: <a href="mailto:Deenis.group2000@gmail.com">Deenis.group2000@gmail.com</a></p>
                    <p>
                        Address: FA1, 332, Sector 6 Rd, near Shake Karo,<br />
                        Pocket 1, Sector 6A, Rohini,<br />
                        Delhi, 110085
                    </p>
                </div>
                <div className="footer-column">
                    <h3>Online Legal Consultation</h3>
                    <ul>
                        <li><a href="#onlineconsultant">Divorce</a></li>
                        <li><a href="#onlineconsultant">Property Dispute</a></li>
                        <li><a href="#onlineconsultant">Employment Matters</a></li>
                        <li><a href="#onlineconsultant">Recovery of Money</a></li>
                        <li><a href="#onlineconsultant">Criminal Matters</a></li>
                        <li><a href="#onlineconsultant">Family Dispute</a></li>
                        <li><a href="#onlineconsultant">Main Sitemap</a></li>
                        <li><a href="#onlineconsultant">View All</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Other Featured Services</h3>
                    <ul>
                        <li><a href="#services">Court Marriage</a></li>
                        <li><a href="#services">Birth Certificate</a></li>
                        <li><a href="#services">Succession Certificate</a></li>
                        <li><a href="#services">Legal Heir Certificate</a></li>
                        <li><a href="#services">Name Change</a></li>
                        <li><a href="#services">Traffic Challan</a></li>
                        <li><a href="#services">Death Certificate</a></li>
                        <li><a href="#services">Sale Deed</a></li>
                        <li><a href="#services">View All</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Court Marriage Service Cities</h3>
                    <ul>
                        <li><a href="#">Delhi</a></li>
                        <li><a href="#">Gurugram</a></li>
                        <li><a href="#">Haryana</a></li>
                        <li><a href="#">Lucknow</a></li>
                        <li><a href="#">Varanasi</a></li>
                        <li><a href="#">Rajasthan</a></li>
                        <li><a href="#">Bhopal</a></li>
                        <li><a href="#">Patna</a></li>
                        <li><a href="#">Agra</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2021-2024 Deenis Law Chamber | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;