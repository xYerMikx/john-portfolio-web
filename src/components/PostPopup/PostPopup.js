import React from "react";
import { NavLink } from "react-router-dom";

export const PostPopup = ({ text, title, link, date, category, isOpen, changeIsOpen }) => {
  return (
    <div className={isOpen ? "modal__overlay" : "modal__overlay none"}>
      <div className="modal__container">
        <svg height="20" viewBox="0 0 200 200" width="20" onClick={changeIsOpen}>
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <a href={link} className="modal__title">
          {title}
        </a>
        <div className="modal__info">
          {date} <span>|</span> {category}
        </div>
        <div className="modal__text">{text}</div>
        <NavLink to="/blog" className="recent-post__button" onClick={changeIsOpen}>Go to Blogs</NavLink>
      </div>
    </div>
  );
};
