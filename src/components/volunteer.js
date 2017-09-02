import React, { Component } from 'react';

const Volunteer = () => {
  return (
    <div className="fl w-100 w-50-l">

      <header className="tc">
        <h1 className="f4 f3-m f2-l fw2 black-90 mv3">
          volunteer experience
        </h1>
      </header>

      <ul className="list pl0">
        <li className="pa3 pa4-ns">
          <b className="db f4 mb1">Goodyear Toastmasters</b>
          <span className="f5 db lh-copy measure">
            I joined in Fall 2012 to better my speaking skills and to help others improve. Regularly chaired club meetings and contests. Served as Club VP of Education for 2013-14 and as Club Secretary for 2015-16 term. Receipient of the clubs 2013 Rudy Award for outstanding contributions.
          </span>
        </li>
        <li className="pa3 pa4-ns">
          <b className="db f4 mb1">Greater Toronto Multiple Alarm Association</b>
          <span className="f5 db lh-copy measure">
            A non-profit organization that provides rehab services for Toronto Fire Services at emergency scenes and department functions. Served as website administrator and social media officer from May 2011 to present.
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Volunteer;
