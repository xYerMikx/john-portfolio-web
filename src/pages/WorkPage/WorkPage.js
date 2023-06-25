import React from "react";
import { useParams } from "react-router-dom";
import { works } from "../../helpers/worksList";

export const WorkPage = () => {
  const { id } = useParams();
  const work = works[id];

  return (
    <main className="page">
      <div className="article">
      <h1 className="article__title">{work.title}</h1>
      <div className="article__info">
        <div className="article__year">{work.year}</div>
        <div className="article__category">{work.category}</div>
      </div>
      <div className="article__text">
        <p>{work.text}</p>
        <img src={work.img} alt="Article 1" />
        <p>{work.text}</p>
        <img src={work.img} alt="Article 2" />
      </div>
    </div>
    </main>
  );
};
