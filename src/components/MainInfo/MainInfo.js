import React from "react";
import { downloadFileAtURL } from "../../utils/downloadFileAtURL";
import avatar from "../../img/John.png";

const RESUME_FILE = "http://localhost:3000/resume.pdf";

export const MainInfo = () => {
  return (
    <section className="hello">
      <div className="hello__container _container">
        <div className="hello__content">
          <h1 className="hello__title title">
            Hi, I am John, <br />
            Creative Technologist
          </h1>
          <div className="hello__text text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </div>
          <button
            onClick={() => downloadFileAtURL(RESUME_FILE)}
            className="hello__btn btn"
          >
            Download Resume
          </button>
        </div>
        <div className="hello__pic">
          <img src={avatar} alt="John" />
        </div>
      </div>
    </section>
  );
};
