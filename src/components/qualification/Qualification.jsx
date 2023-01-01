import React from "react";
import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              toggleState === 1 ? "qualification__active" : ""
            }`}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={`qualification__button button--flex ${
              toggleState === 2 ? "qualification__active" : ""
            }`}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              toggleState === 1 ? "qualification__content-active" : ""
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Information Technology</h3>
                <span className="qualification__subtitle">
                  ITB STIKOM Bali - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2016 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Enginer</h3>
                <span className="qualification__subtitle">
                  SMKN 1 Denpasar - Industrial high school
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2013 - 2016
                </div>
              </div>
            </div>
          </div>
          <div
            className={`qualification__content ${
              toggleState === 2 ? "qualification__content-active" : ""
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Enginer</h3>
                <span className="qualification__subtitle">
                  PT Grune Teknologi - FullTime
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">
                  CV MERU BALI - FullTime
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Programmer</h3>
                <span className="qualification__subtitle">
                  CV Harmoni Permata - PartTime
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017 - 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">
                  Gekan Media Solution - Freelancer
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2015 - 2016
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Programmer</h3>
                <span className="qualification__subtitle">
                  Pilar Kreatif Studio - Internship
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2015 - 2015
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
