import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Yogi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/madeyoginugraha/"
            className="footer__social-link "
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.instagram.com/madeyoginugraha/"
            className="footer__social-link "
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-youtube"></i>
          </a>
          <a
            href="https://www.instagram.com/madeyoginugraha/"
            className="footer__social-link "
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <div className="footer__copy">&#169; MadeYogi. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
