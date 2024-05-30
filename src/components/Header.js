import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../assets/images/logo-full.png';
import { Link } from 'react-scroll';

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
          <Link to="home" smooth={true} duration={500} onClick={toggleNav}>Home</Link>
          <Link to="about" smooth={true} duration={500} onClick={toggleNav}>About us</Link>
          <Link to="clientele" smooth={true} duration={500} onClick={toggleNav}>Clientele</Link>
          <Link to="services" smooth={true} duration={500} onClick={toggleNav}>What we offer</Link>
          <Link to="contact" smooth={true} duration={500} onClick={toggleNav}>Contact</Link>
        </nav>
        <div className="header__toggle" onClick={toggleNav}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
