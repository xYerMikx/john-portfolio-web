import React from "react";
import fb from "../../img/icons/fb.svg";
import insta from "../../img/icons/insta.svg";
import twitter from "../../img/icons/twitter.svg";
import linkedin from "../../img/icons/Linkedin.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__content _container">
        <div className="footer__social social">
          <a href="https://facebook.com" target="_blank" className="social__item" rel="noreferrer">
            <img src={fb} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" className="social__item" rel="noreferrer">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" className="social__item" rel="noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" className="social__item" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
        <div className="footer__copy">Copyright ©2020 All rights reserved </div>
      </div>
    </footer>
  );
};
