import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';
import avatar from '../assets/images/logo-full.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
      <img className="logo" src={avatar} alt="Profile" />
        {/* <img src={avatar} width={300}  height={300}  alt={"logo__image"} className={"logo__image"}/> */}
        <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={toggleNav}>Home</a>
          <a href="#about" onClick={toggleNav}>About</a>
          <a href="#projects" onClick={toggleNav}>Projects</a>
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
