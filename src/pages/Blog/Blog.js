import React, { useEffect } from "react";
import { BlogItem } from "../../components/BlogItem/BlogItem";
import { blogs as blogsArr } from "../../helpers/blogList";
import { useState } from "react";
import {
  getInitialBlogs,
  getInitialClassNames,
} from "../../utils/getInitialValues";
import { sortAscending, sortDescending } from "../../utils/sortBlogs";

export const Blog = () => {
  const activeButton = "blog__button _active";
  const normalButton = "blog__button";
  const iterableBlogs = [...blogsArr];

  const [classNames, setClassNames] = useState(
    getInitialClassNames(normalButton, normalButton)
  );
  const [blogs, setBlogs] = useState(getInitialBlogs(blogsArr));

  const handleClick = (e) => {
    const value = e.target.textContent.toLowerCase();
    switch (value) {
      case "newest":
        setBlogs(sortDescending(iterableBlogs));
        setClassNames({
          class1: activeButton,
          class2: normalButton,
        });
        break;
      case "oldest":
        setBlogs(sortAscending(iterableBlogs));
        setClassNames({
          class1: normalButton,
          class2: activeButton,
        });
        break;
      default:
        setBlogs(getInitialBlogs(blogsArr));
        setClassNames(getInitialClassNames(normalButton, normalButton));
        break;
    }
  };

  useEffect(() => {
    window.localStorage.setItem("classNames", JSON.stringify(classNames));
    window.localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [classNames, blogs]);

  return (
    <main className="page">
      <div className="blog page__container _container">
        <h1 className="blog__title title">Blog</h1>
        <p className="blog__sort-info">Sort blogs by:</p>
        <button onClick={handleClick} className={classNames.class1}>
          Newest
        </button>
        <button className={classNames.class2} onClick={handleClick}>
          Oldest
        </button>
        <div className="blog__items">
          {blogs.map((blog, index) => {
            return <BlogItem key={index} {...blog} />;
          })}
        </div>
      </div>
    </main>
  );
};
