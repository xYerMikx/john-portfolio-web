import React from "react";
import { works } from "../../helpers/worksList";
import { Work } from "../Work/Work";

export const FeaturedWorks = () => {
  return (
    <section className="featured-works">
      <div className="featured-works__container _container">
        <div className="featured-works__title">Featured works</div>
        <div className="featured-works__items works">
        {works.filter((_, index) => {
          return index < works.length - 2
        }).map((work, index) => {
            return (
              <Work 
                key={index}
                title={work.title}
                img={work.img}
                text={work.text}
                year={work.year}
                category={work.category}
                link={work.link}
                index={index}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
};
