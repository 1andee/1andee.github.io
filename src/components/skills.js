import React, { Component } from 'react';

const Skills = () => {

  const skillList = ['JavaScript', 'React', 'NativeScript', 'Node.js', 'Express.js', 'Postgres', 'Knex.js', 'MongoDB', 'Ruby on Rails', 'AJAX', 'HTML5', 'CSS', 'jQuery', 'SQL', 'Heroku', 'Amazon AWS', 'GitHub', 'Bootstrap', 'Wordpress', 'Photoshop']

  const renderSkills = skillList.map((skill) => {
    return (
      <li className="dib mr1 mb2 f6 f5-ns b pa2 dim dark-gray ba b--black-20" key={skill}>{skill}</li>
    );
  });

  return (
    <section id="skillz" className="bb b--black-10 pv4">

      <header className="tc">
        <h1 className="f4 f3-m f2-l fw2 black-80">
          skills
        </h1>
      </header>

      <ul className="list ph3 ph5-ns pv3 w-100 w-70-l center">
        {renderSkills}
      </ul>
    </section>
  );

}

export default Skills;
