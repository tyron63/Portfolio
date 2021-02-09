import React, { Component, Fragment } from "react";
import "./css/about.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import About_image from "../img/About_image.png";

class About extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML5",
          content: "HTML5",
          persentasie: "67%",
          value: "67",
        },
        {
          id: "CSS",
          content: "CSS",
          persentasie: "54%",
          value: "54",
        },
        {
          id: "JavaScript",
          content: "JavaScript + ReactJS",
          persentasie: "57%",
          value: "57",
        },
        {
          id: "Python",
          content: "Python",
          persentasie: "80%",
          value: "80",
        },
        {
          id: "MySQL",
          content: "MySQL",
          persentasie: "78%",
          value: "78",
        },
        {
          id: "MongoDB",
          content: "MongoDB",
          persentasie: "74%",
          value: "74",
        },
        {
          id: "WordPress",
          content: "WordPress",
          persentasie: "52%",
          value: "52",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I'm an aspiring 19 year old Full Stack developer born and raised in Cape Town. I am logical, creative, love problem solving and learning new skills. I look forward to working in an environment where I can work with and learn from others around me. During my learning process I've come to enjoy self learning and still spend my own time coding on CodeCademy and YouTube videos.",
        },
        {
          id: "second-p-about",
          content:
            "If I'm not busy coding I enjoy doing outside activities like all kinds of sports, I love playing chess, 30 Seconds and any game that basically tests your brain.",
        },
      ],
    };
  }

  render() {
    return (
      <section
        id="about"
        className="about-mf sect-pt4 route"
        style={{
          backgroundImage: "url(" + About_image + ")",
          backgroundPositionX: "center",
        }}
      >
        <div>
          <Flippy ref={(r) => (this.flippyHorizontal = r)} flipOnClick={false}>
            <FrontSide>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="box-shadow-full1">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="about-me pt-4 pt-md-0">
                            <div className="title-box-2">
                              <h5 className="title-left">About Me</h5>
                            </div>
                            {this.state.about_me.map((content) => {
                              return (
                                <p className="lead" key={content.id}>
                                  {content.content}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h5 className="title-left">Skillset</h5>
                          <br />

                          <div className="skill-mf">
                            {this.state.skills.map((skill) => {
                              return (
                                <Fragment key={skill.id}>
                                  <span>{skill.content}</span>{" "}
                                  <span className="pull-right">
                                    {skill.persentasie}
                                  </span>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: skill.persentasie }}
                                      aria-valuenow={skill.value}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </Fragment>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <button
                        className="button button-a button-small button-rouded"
                        type="button"
                        onClick={() => this.flippyHorizontal.toggle()}
                      >
                        Find Out More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FrontSide>
            <BackSide>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="box-shadow-full1">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="about-me pt-4 pt-md-0">
                            <div className="title-box-2">
                              <h5 className="title-left">Hobbies</h5>
                            </div>
                            <div>
                              <p>
                                <strong>Sport</strong>
                                <br />I love doing sport and competing with
                                people.
                              </p>
                              <p>
                                <strong>Reading</strong>
                                <br />A book has taken me to so many places and
                                help in to explore my inside world.
                              </p>
                              <p>
                                <strong>Gaming</strong>
                                <br />
                                From online to offline, console to actually
                                getting dirty, I love chess, 30 Seconds, and
                                Cluedo.
                              </p>
                              <p>
                                <strong>Coding</strong>
                                <br />I would spend hours just coding and
                                creating new things, it keeps the mind focus and
                                also helps you with problem solving.
                              </p>
                              <p>
                                <strong>
                                  Fixing,Updating and also building up computers
                                </strong>
                                <br />
                                Having been taught this at a very young age was
                                the best thing because that inspired to get into
                                what computers all about.
                              </p>
                            </div>
                            <button
                              className="button button-a button-small button-rouded"
                              type="button"
                              onClick={() => this.flippyHorizontal.toggle()}
                            >
                              To Flip Back
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div>
                            <h3 className="title-left">Education</h3>
                            <br />
                            <p style={{ color: "black" }}>
                              Matric (school and year): Modderdam High School
                              (2019)
                            </p>
                            <p style={{ color: "black" }}>
                              Life Choices Coding Academy: Full Stack
                              Development(2020)
                            </p>
                          </div>
                          <br />
                          <h5 className="title-left">Working Experience</h5>
                          <br />
                          <div>
                            <p>
                              <u>Devtron(2019-2020)</u>
                              <br />
                              -- Assist the boss with the setup and also the
                              programming behind the electrical fence.
                            </p>
                          </div>
                          <div>
                            <p>
                              <u>LC Studio(currently)</u>
                              <br />
                              -- Front End Web developer. Doing WordPress
                              Development.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BackSide>
          </Flippy>
        </div>
      </section>
    );
  }
}

export default About;
