import React from "react";
import "./work.css";
import Works from "./Works";

const work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <Works />
      <div className="work__container container grid"></div>
    </section>
  );
};

export default work;
