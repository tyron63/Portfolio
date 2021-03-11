import React, { Component } from "react";
import "./css/portfolio.css";

//import Images
import One from "../img/image1.png";
import Two from "../img/image2.png";
import Three from "../img/image3.png";
import Four from "../img/VanKesteren.JPG";
import Five from "../img/image5.png";
import Six from "../img/image6.png";
import Seven from "../img/image7.png";

class Portfolio extends Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">Checkout some of my work.</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href="https://netflixsd.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="work-img">
                    <img src={Five} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">NetFlix</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Full Fontend landing page on Netflix. Back-end
                            coming soon
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="RepoSec">
                      <a
                        href="https://github.com/tyron63/Netflix-project.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github repo
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href="https://contact-keeper210.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="work-img">
                    <img src={Six} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Contact Keeper</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Help you with keeping track of all your contacts.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="RepoSec">
                      <a
                        href="https://github.com/tyron63/ContactKeeper.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github repo
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href="https://modest-hypatia-c1c905.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="work-img">
                    <img src={One} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">IT-Logger</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Keeps track of all the data that is logged in.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="RepoSec">
                      <a
                        href="https://github.com/tyron63/IT_Logger.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github repo
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href="https://jovial-galileo-3d0b37.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="work-img">
                    <img src={Two} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">GitHub-Finder</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Find github repos and display the infomation of
                            them.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="RepoSec">
                      <a
                        href="https://github.com/tyron63/Js-Github-project-finder.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github repo
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href="https://distracted-bassi-d4bf30.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="work-img">
                    <img src={Three} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">My Online Shop</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            My Online Shop is a store that sells stuff online.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="RepoSec">
                      <a
                        href="https://github.com/tyron63/1234.git"
                        target="_black"
                        rel="noopener noreferrer"
                      >
                        Github repo
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a
                  href="https://devzone.lifechoicesacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="work-img">
                    <img src={Four} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Van Kesteren</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            <br />
                            Live WordPress Website. The Van Kesteren-Foundation
                            Website
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a
                  href="https://devzone.lifechoicesacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="work-img">
                    <img src={Seven} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">HCI Foundation</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            <br />
                            Live WordPress Website. HCI Foundation Website
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
