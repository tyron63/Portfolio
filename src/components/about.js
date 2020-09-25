import React, { Component, Fragment } from 'react';
import './css/about.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import About_image from '../img/About_image.png';

class About extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: 'HTML5',
          content: 'HTML5',
          persentasie: '67%',
          value: '67',
        },
        {
          id: 'CSS',
          content: 'CSS',
          persentasie: '54%',
          value: '54',
        },
        {
          id: 'JavaScript',
          content: 'JavaScript',
          persentasie: '57%',
          value: '57',
        },
        {
          id: 'Bootstrap',
          content: 'Bootstrap',
          persentasie: '70%',
          value: '70',
        },
        {
          id: 'ReactJS',
          content: 'ReactJS',
          persentasie: '55%',
          value: '55',
        },
        {
          id: 'Python',
          content: 'Python',
          persentasie: '80%',
          value: '80',
        },
        {
          id: 'MySQL',
          content: 'MySQL',
          persentasie: '78%',
          value: '78',
        },
        {
          id: 'MongoDB',
          content: 'MongoDB',
          persentasie: '74%',
          value: '74',
        },
      ],
      about_me: [
        {
          id: 'first-p-about',
          content:
            "I'm an aspiring 19 year old Full Stack developer born and raised in Cape Town. I am logical, creative, love problem solving and learning new skills. I look forward to working in an environment where I can work with and learn from others around me. During my learning process I've come to enjoy self learning and still spend my own time coding on CodeCademy and YouTube videos.",
        },
        {
          id: 'second-p-about',
          content:
            "If I'm not busy coding i enjoy i love doing outside activities like all kind of sports i love playing chess,30 Seconds and anygame that basically test your brain.",
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
          backgroundImage: 'url(' + About_image + ')',
          backgroundPositionX: 'center',
        }}
      >
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection="horizontal"
          ref={(r) => (this.flippy = r)}
        >
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
                          <br />
                          <div>
                            <h3 className="title-left">Education</h3>
                            <br />
                            <p style={{ color: 'black' }}>
                              Matric (school and year): Modderdam High School
                              (2019)
                            </p>
                          </div>
                        </div>
                        <br />
                        <br />
                        <u style={{ color: 'red' }}>
                          <h6>
                            Click anywhere on the card to view my hobbies and
                            Working Experience
                          </h6>
                        </u>
                      </div>
                      <div className="col-md-6">
                        <h5 className="title-left">Skillset</h5>
                        <div className="row">
                          <div
                            className="col-sm-6 col-md-5"
                            style={{ margin: '0 auto' }}
                          >
                            <div
                              className="about-img"
                              style={{ textAlign: 'center' }}
                            >
                              <img
                                className="img-fluid rounded b-shadow-a"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="skill-mf">
                          {this.state.skills.map((skill) => {
                            return (
                              <Fragment key={skill.id}>
                                <span>{skill.content}</span>{' '}
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
                              getting dirty, i love chess, 30 Seconds, and
                              cluedo.
                            </p>
                            <p>
                              <strong>Coding</strong>
                              <br />I would spend hours just coding and creating
                              new things, it keeps the mind focus and also helps
                              you with problem solving.
                            </p>
                            <p>
                              <strong>
                                Fixing,Updating and also building up computers
                              </strong>
                              <br />
                              Having been teached this at a very young age was
                              the best thing because that inspirerd to get into
                              what computers all about.
                            </p>
                            <p>
                              <strong>Making and Producing Music</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h5 className="title-left">Working Experience</h5>
                        <div className="row">
                          <div
                            className="col-sm-6 col-md-5"
                            style={{ margin: '0 auto' }}
                          >
                            <div
                              className="about-img"
                              style={{ textAlign: 'center' }}
                            >
                              <img
                                className="img-fluid rounded b-shadow-a"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <p>
                            <u>Devtron(2019-2020)</u>
                            <br />
                            --Assist the boss with the setup and also the
                            programming behind the electrical fence.
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
      </section>
    );
  }
}

export default About;
