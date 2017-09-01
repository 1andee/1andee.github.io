import React, { Component } from 'react';

const Education = () => {

  const schoolList = [
    ['Lighthouse Labs', 'Full Stack Web Development (Immersive) 2017'],
    ['Humber College', 'Certificate in Occupational Health & Safety 2015'],
    ['Georgian College', 'College Diploma in Aviation Management 2006 - 2009']
  ]

  const renderSchools = schoolList.map((school) => {
    return (
      <li className="pa3 pa4-ns" key={school[0]}>
      <b className="db f4 mb1">{school[0]}</b>
      <span className="f5 db lh-copy measure">{school[1]}</span>
      </li>
    );
  });

  return (
  <div className="fl w-100 w-50-l">
    <h2 className="tc">Education</h2>
      <ul className="list pl0">
        {renderSchools}
      </ul>
  </div>
  );
}

export default Education;
