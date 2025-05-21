import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Pwani Innovation Week</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#speakers">Speakers</a></li>
        <li><a href="#agenda">Agenda</a></li>
        <li><a href="#register">Register</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
