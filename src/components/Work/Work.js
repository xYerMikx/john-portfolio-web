import React from "react";
import { NavLink } from "react-router-dom";

export const Work = ( {title, img, year, text, category, index} ) => {
  return (
    <article className="works__item">
      <NavLink to={`/work/${index}`} className="works__image _img">
        <img src={img} alt="Work 1" />
      </NavLink>
      <div className="works__body">
        <NavLink to={`/work/${index}`} className="works__title">
            {title}
        </NavLink>
        <div className="works__info">
          <div className="works__year">{year}</div>
          <div className="works__category">{category}</div>
        </div>
        <div className="works__text text">
            {text}
        </div>
      </div>
    </article>
  );
};
