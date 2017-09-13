import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

// Import page components
import Header from './components/header';
import Skills from './components/skills';
import Projects from './components/projects';
import EducationVolunteer from './containers/education_volunteer';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {

  constructor() {
    super();

    // Google Analytics
    ReactGA.initialize('UA-72753738-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div>
        <Header />
        <Skills />
        <Projects />
        <Work />
        <EducationVolunteer />
        <Contact />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
