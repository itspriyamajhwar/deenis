import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
    <div className="container">
      {/* Logo */}
      <div className="logo">
        <a href="#home" onClick={closeMenu}>
          <span>DEENIS</span>
          <span className="highlight">LAW CHAMBER</span>
        </a>
      </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? (
            <i className="fa-solid fa-xmark"></i> // Close icon
          ) : (
            <i className="fa-solid fa-bars"></i> // Hamburger icon
          )}
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>Services</a>
            </li>
            <li>
              <a href="#registration" onClick={closeMenu}>Registration</a>
            </li>
            <li>
              <a href="#onlineconsultant" onClick={closeMenu}>Online Consultant</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
