import React, { Component } from 'react';

const Footer = () => {
  return (
    <footer className="pa4 pa5-l bg-light-gray black-70 bt b--black-10">

      <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div className="tc">
          <h1 className="pv0 f6 fw6 ttu tracked tc">Ian Duke</h1>
          <hr className="mw3 bb bw1 b--black-10" />
        </div>
        <span className="f7 f6-l db black-70 tc">7-12 Albert Ave.</span>
        <span className="f7 f6-l db black-70 tc">Toronto, ON M8V 2L4</span>
        <span className="f6 db fw6 pv3 tc"><a href="tel:+16475734232" className="link dim black-70" title="Call Ian Duke">
          +1 (647) 573-4232
        </a></span>
      <span className="f6 db fw6 pv3 tc"><a href="mailto:ian.c.duke@gmail.com" className="black-70 link dim" title="Email Ian Duke">ian.c.duke@gmail.com</a></span>
      </article>

      <div className="pv4 ph3 ph5-ns tc">
        <a className="link near-black hover-silver dib h2 w2 mr3" href="https://www.linkedin.com/in/ian-duke/" target="_blank" title="Ian Duke's LinkedIn">
          <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
        </a>

        <a className="link near-black hover-silver dib h2 w2 mr3" href="http://github.com/1andee" target="_blank" title="Ian Duke's GitHub">
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>

        <a className="link near-black hover-silver dib h2 w2" href="mailto:ian.c.duke@gmail.com" title="Email Ian Duke">
          <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
        </a>
      </div>

    </footer>
);
}

export default Footer;
