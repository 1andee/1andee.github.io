import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import EducationVolunteer from './containers/education_volunteer';
import Skills from './components/skills';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Skills />
        <EducationVolunteer />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
