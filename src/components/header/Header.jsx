import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <nav className="nav-bar">
        <h1 className="logo-text">Vivekanand College Kolhapur</h1>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/courses" className="nav-link" onClick={() => setIsMenuOpen(false)}>Courses</Link>
          <Link to="/admissions" className="nav-link" onClick={() => setIsMenuOpen(false)}>Admissions</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
