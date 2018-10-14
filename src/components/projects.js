import React, { Component } from 'react';

const Projects = () => {

  const projectList = [
    ['Pairwise', 'Rails, Postgres', 'https://github.com/1andee/pairwise', './images/pairwise.png'],
    ['Smart To-Do List', 'JS, jQuery, Postgres, Knex', 'https://github.com/1andee/TODO-list', './images/kick-list.png'],
    ['gtmaa.com', 'Wordpress + APIs', 'http://gtmaa.com', './images/gtmaa.png'],
    ['eCommerce Storefront', 'Rails, Postgres', 'https://github.com/1andee/rails-ecommerce', './images/rails-store.png'],
    ['Tweeter', 'JS, jQuery, MongoDB', 'https://github.com/1andee/tweetr', './images/tweeter.png'],
    ['URL Shortener', 'JS, Bootstrap', 'https://github.com/1andee/url-shortener', './images/tinyurl.png'],
    ['Fin Lookup', 'JS, jQuery, Postgres, Knex', 'https://github.com/1andee/ac-fin-lookup', './images/fin-lookup.png'],
    ['Quote Generator', 'JS, jQuery', 'https://github.com/1andee/hedberg-quote-machine', './images/hedberg.png'],
    ['Youtube Viewer', 'React', 'http://iantube.herokuapp.com/', './images/react.png'],
    ['Chattyapp', 'React, Sockets', 'https://github.com/1andee/chatty-app', './images/react.png']
  ]

  const renderProjects = projectList.map((project) => {
    return (
      <div className="fl w-50 w-25-m w-20-l ph2 pv4" key={project[0]}>
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
        <h1 className="f4 f3-m f2-l fw2 black-90 mv5">
          projects
        </h1>
      </header>
      <div className="cf pa2">
        {renderProjects}
      </div>
    </section>
  );
}

export default Projects;
