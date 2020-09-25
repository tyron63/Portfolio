import React, { Component, Fragment } from 'react';

// Css Import
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css';
import './App.css';

// JavaScript libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

// Components
import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import BackToTop from './components/back-top';
import Preloader from './components/preloader';
import Testimonials from './components/Testimonials';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Intro />
        <div className="line-gf"></div>
        <About />
        <div className="line-ff"></div>
        <Portfolio />
        <div className="line-zf"></div>
        <Testimonials />
        <Contact />
        <BackToTop />
        <Preloader />
      </Fragment>
    );
  }
}

export default App;
