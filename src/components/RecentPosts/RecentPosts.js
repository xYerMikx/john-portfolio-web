import React from "react";
import { NavLink } from "react-router-dom";
import { blogs } from "../../helpers/blogList";
import { RecentPost } from "../RecentPost/RecentPost";

export const recentPosts = blogs
.sort((a, b) => {
  return Date.parse(b.date) - Date.parse(a.date);
})
.slice(0, 2);

export const RecentPosts = () => {
  
  return (
    <section className="recent-posts">
      <div className="recent-posts__container _container">
        <div className="recent-posts__header">
          <p className="recent-posts__title title-posts">Recent posts</p>
          <NavLink to="/blog" className="recent-posts__view-all">
            View All
          </NavLink>
        </div>
        <div className="recent-posts__items">
          {recentPosts.map((recentPost, index) => {
            return (
              <RecentPost
                index={index}
                key={index}
                title={recentPost.title}
                date={recentPost.date}
                category={recentPost.category}
                text={recentPost.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
