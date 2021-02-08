import React, { Component } from "react";
import "./css/intro.css";

import Typed from "react-typed";

class Intro extends Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <u>
                <h1 className="intro-title mb-4">Tyron Keet</h1>
              </u>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Aspiring Junior Full Stack Developer",
                      "Scroll down and get to know me.",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-dark btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View my work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
