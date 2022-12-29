import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Yogi test
        </a>
        <div className="nav__menu">
          <ul className="nav_list grid">
            <li className="nave__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nave__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nave__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nave__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase nav__icon"></i>Services
              </a>
            </li>
            <li className="nave__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>
            <li className="nave__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
