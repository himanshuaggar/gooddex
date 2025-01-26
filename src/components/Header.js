import React, { useState } from "react";
import "../styles/Header.scss";
import { FiExternalLink } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">GoodDex</div>

      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
        <ul>
          <li>Products <FaChevronDown className="nav-icon" size={12} /></li>
          <li>Company <FaChevronDown className="nav-icon" size={12} /></li>
          <li>Blogs</li>
          <li>Pricing</li>
        </ul>
      </nav>

      <div className={`auth ${isMenuOpen ? 'auth--open' : ''}`}>
        <button className="login">Login/Signup</button>
        <button className="job">
          Looking for job?
          <FiExternalLink />
        </button>
      </div>
    </header>
  );
};

export default Header;