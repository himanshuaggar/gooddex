import React from "react";
import "../styles/Header.scss";
import { FiExternalLink } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">GoodDex</div>
      <nav className="nav">
        <ul>
          <li>Products
          <FaChevronDown className="nav-icon" size={12} />
          </li>
          <li>Company
          <FaChevronDown className="nav-icon" size={12} />
          </li>
          <li>Blogs</li>
          <li>Pricing</li>
        </ul>
      </nav>
      <div className="auth">
        <button className="login">Login/Signup</button>
        <button className="job">Looking for job?
          <FiExternalLink />
        </button>
      </div>
    </header>
  );
};

export default Header;
