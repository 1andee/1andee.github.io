import React, { Component } from 'react';

const Education = () => {

  const schoolList = [
    ['Lighthouse Labs', 'Full Stack Web Development (Immersive) 2017'],
    ['Humber College', 'Certificate in Occupational Health & Safety 2015'],
    ['Georgian College', 'College Diploma in Aviation Management 2006 - 2009']
  ]

  const renderSchools = schoolList.map((school) => {
    return (
      // padding 4 on L /R
      // padding 3 on Top/Bottom
      <li className="pa3 pa4-ns black-80" key={school[0]}>
      <b className="db f4 mb1">{school[0]}</b>
      <span className="f5 db lh-copy measure">{school[1]}</span>
      </li>
    );
  });

  return (
  <div className="fl w-100 w-50-l">

    <header className="tc">
      <h1 className="f4 f3-m f2-l fw2 black-90 mv3 pr5-l">
        education
      </h1>
    </header>

      <ul className="list pl0 pl4-l">
        {renderSchools}
      </ul>
  </div>
  );
}

export default Education;
