import React, { Component } from 'react';
import Education from '../components/education';
import Volunteer from '../components/volunteer';

const EducationVolunteer = () => {
  return (
    <article className="cf pv4 bb b--black-10">
      <Education />
      <Volunteer />
    </article>

  );
}

export default EducationVolunteer;
