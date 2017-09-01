import React, { Component } from 'react';

const Education = () => {
  return (
  <div className="fl w-100 w-50-l">
    <h1 className="tc">Education</h1>
      <ul className="list pl0">
    <li className="pa3 pa4-ns">
      <b className="db f3 mb1">Lighthouse Labs</b>
      <span className="f5 db lh-copy measure">
        Full Stack Web Development (Immersive) 2017</span>
    </li>
    <li className="pa3 pa4-ns">
      <b className="db f3 mb1">
        Humber College
      </b>
      <span className="f5 db lh-copy measure">
        Certificate in Occupational Health & Safety 2015
      </span>
    </li>
    <li className="pa3 pa4-ns">
      <b className="db f3 mb1">
        Georgian College
      </b>
      <span className="f5 db lh-copy measure">
        Aviation Management 2006 - 2009
      </span>
    </li>
  </ul>
  </div>
  );
}

export default Education;
