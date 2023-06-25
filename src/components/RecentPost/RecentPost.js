import React, { useState } from "react";
import { PostPopup } from "../PostPopup/PostPopup";
import { recentPosts } from "../RecentPosts/RecentPosts";

export const RecentPost = ({ title, date, category, text, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeIsOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "unset";
    } else {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="recent-posts__column">
      <article className="recent-posts__item recent-post">
        <a href="#App" className="recent-post__title" onClick={changeIsOpen}>
          {title}
        </a>
        <div className="recent-post__info">
          {date} <span>|</span> {category}
        </div>
        <div className="recent-post__text text">{text}</div>
      </article>
      <PostPopup
        changeIsOpen={changeIsOpen}
        isOpen={isOpen}
        text={recentPosts[index].text}
        title={recentPosts[index].title}
        link={recentPosts[index].link}
        date={recentPosts[index].date}
        category={recentPosts[index].category}
      />
    </div>
  );
};
