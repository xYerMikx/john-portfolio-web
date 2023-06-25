import React from "react";
import { Work } from "../../components/Work/Work";

import { works } from "../../helpers/worksList";

export const Works = () => {
  return (
    <main className="page">
      <div className="works page__container _container">
        <div className="works__main-title title">Works</div>
        <div className="works">
          {works.map((work, index) => {
            return <Work key={index} {...work} index={index} />;
          })}
        </div>
      </div>
    </main>
  );
};
