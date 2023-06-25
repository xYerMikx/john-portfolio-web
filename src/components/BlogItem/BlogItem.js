import React from "react";

export const BlogItem = ( {title, date, category, text, link} ) => {
  return (
    <div className="blog__item">
      <a href={link} className="blog__name" target='_blank' rel="noreferrer">
        {title}
      </a>
      <div className="blog__info">
        {date} <span>|</span>
        <div className="blog__category">{category}</div>
      </div>
      <div className="blog__text text">
        {text}
      </div>
    </div>
  );
};
