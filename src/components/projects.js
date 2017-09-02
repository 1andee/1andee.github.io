import React, { Component } from 'react';

const Projects = () => {

  const projectList = [
    ['Pairwise', 'Ruby on Rails, Postgres', 'https://github.com/1andee/pairwise', 'http://via.placeholder.com/250x150'],
    ['Smart To-Do List', 'JS, jQuery, Postgres, Knex', 'https://github.com/1andee/TODO-list', 'http://via.placeholder.com/250x150'],
    ['gtmaa.com', 'Wordpress + APIs', 'http://gtmaa.com', 'http://via.placeholder.com/250x150'],
    ['Rails e-commerce', 'Ruby on Rails', 'https://github.com/1andee/rails-ecommerce', 'http://via.placeholder.com/250x150'],
    ['Tweeter', 'JS, jQuery, MongoDB', 'https://github.com/1andee/tweetr', 'http://via.placeholder.com/250x150'],
    ['URL Shortener', 'JS, Bootstrap', 'https://github.com/1andee/url-shortener', 'http://via.placeholder.com/250x150'],
    ['Fin Lookup', 'JS, jQuery, Postgres, Knex', 'https://github.com/1andee/ac-fin-lookup', 'http://via.placeholder.com/250x150'],
    ['Quote Generator', 'JS, jQuery', 'https://github.com/1andee/hedberg-quote-machine', 'http://via.placeholder.com/250x150'],
    ['Youtube Viewer', 'React', 'http://iantube.herokuapp.com/', 'http://via.placeholder.com/250x150'],
    ['Chattyapp', 'React, Sockets', 'https://github.com/1andee/chatty-app', 'http://via.placeholder.com/250x150']
  ]

  const renderProjects = projectList.map((project) => {
    return (
      <div className="fl w-50 w-25-m w-20-l pa2" key={project[0]}>
        <a href={project[2]} className="db link dim tc" target="_blank">
          <img src={project[3]} className="w-100 db outline black-30"/>
          <dl className="mt2 f6 lh-copy">
            <dd className="ml0 black truncate w-100">{project[0]}</dd>
            <dd className="ml0 gray truncate w-100">{project[1]}</dd>
          </dl>
        </a>
      </div>
    );
  });


  return (
    <section className="pv4 bg-light-gray">
      <header className="tc">
        <h1 className="f4 f3-m f2-l fw2 black-90 mv4">
          project work
        </h1>
      </header>
      <div className="cf pa2">
        {renderProjects}
      </div>
    </section>
  );
}

export default Projects;
