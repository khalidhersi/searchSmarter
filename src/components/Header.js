import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../assets/images/logo-edit.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">          
        <div className="logo">
          <img className="logo__img" src={logo} alt="Profile" />
        </div>
        <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={toggleNav}>Home</a>
          <a href="#about" onClick={toggleNav}>About us</a>
          <a href="#clientele" onClick={toggleNav}>Clientele & Work History</a>
          <a href="#services" onClick={toggleNav}>Services</a>
          <a href="#contact" onClick={toggleNav}>Contact</a>
        </nav>
        <div className="header__toggle" onClick={toggleNav}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
