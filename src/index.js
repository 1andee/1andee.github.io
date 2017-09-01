import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Skills from './components/skills';
import Projects from './components/projects';
import EducationVolunteer from './containers/education_volunteer';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Skills />
        <EducationVolunteer />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
