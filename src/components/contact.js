import React, { Component } from 'react';
import './css/Button.css';

import Fire from '../img/Red.jpg';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;

    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: 'url(' + Fire + ')' }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send A Message.</h5>
                      </div>
                      <div>
                        <form
                          onSubmit={this.submitForm}
                          action="https://formspree.io/xwkrrqqz"
                          method="POST"
                          className="contactForm"
                        >
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                  required
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                  required
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                  required
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              {status === 'SUCCESS' ? (
                                <p className="submit">
                                  Your message has been sent. Reload to submit
                                  again. Thank you!
                                </p>
                              ) : (
                                <button
                                  type="submit"
                                  className="button button-a button-big button-rouded"
                                >
                                  Send Message
                                </button>
                              )}
                              {status === 'ERROR' && (
                                <p className="submit">
                                  Ooops! There was an error.
                                </p>
                              )}
                            </div>
                            <div></div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Let's get in Touch.</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Hi im Tyron and i would like to know what i can build
                          for you.
                          <br />
                          All you have to do is fill the from and send me an
                          email. Thanks!
                        </p>
                        <ul class="list-ico">
                          <li>
                            <span class="ion-ios-location"></span>5 Rosewood
                            Street, Bonteheuwel 7764
                          </li>
                          <li>
                            <span class="ion-ios-telephone"></span>
                            072 180 9464
                          </li>
                          <li>
                            <span class="ion-email"></span>
                            tyronk33t@gmail.com
                          </li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://github.com/tyron63/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/tyron-keet-06a24b1b3/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}

export default Contact;
