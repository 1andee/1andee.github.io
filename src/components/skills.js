import React, { Component } from 'react';

const Skills = () => {

  const skillList = ['JavaScript', 'React', 'Ruby on Rails', 'Node.js', 'Express.js', 'Postgres', 'Knex.js', 'MongoDB', 'AJAX', 'HTML5', 'CSS', 'jQuery', 'SQL', 'Heroku', 'Amazon AWS', 'GitHub', 'Bootstrap', 'Wordpress', 'Photoshop']

  const renderSkills = skillList.map((skill) => {
    return (
      <li className="dib mr1 mb2 f6 f5-ns b pa2 dim dark-gray ba b--black-20" key={skill}>{skill}</li>
    );
  });

  return (
    <section id="skills">

      <h2 className="tc">skillz</h2>

      <ul className="list ph3 ph5-ns pv4">
        {renderSkills}
      </ul>
    </section>
  );

}

export default Skills;
