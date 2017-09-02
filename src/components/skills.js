import React, { Component } from 'react';

const Skills = () => {

  const skillList = ['JavaScript', 'React', 'Ruby on Rails', 'Node.js', 'Express.js', 'Postgres', 'Knex.js', 'MongoDB', 'AJAX', 'HTML5', 'CSS', 'jQuery', 'SQL', 'Heroku', 'Amazon AWS', 'GitHub', 'Bootstrap', 'Wordpress', 'Photoshop']

  const renderSkills = skillList.map((skill) => {
    return (
      <li className="dib mr1 mb2 f6 f5-ns b pa2 dim dark-gray ba b--black-20" key={skill}>{skill}</li>
    );
  });

  return (
    <section id="skills" className="bb b--black-10">

      <header className="tc">
        <h1 className="f4 f3-m f2-l fw2 black-90">
          skills
        </h1>
      </header>

      <ul className="list ph3 ph5-ns pv3">
        {renderSkills}
      </ul>
    </section>
  );

}

export default Skills;
