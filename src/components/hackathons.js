import React, { Component } from 'react';

const Hackathons = () => {

  const hackathonList = [
    ['Participant - GiftTheCode, Winter 2017, Ryerson University, Toronto'],['Participant - Arthirits Hack, Fall 2017, MaRS Discovery District, Toronto']
  ]

  const renderHackathons = hackathonList.map((hackathon, i) => {
    return (
      <div key={i}>
        <p>{hackathon[0]}</p>
      </div>
    );
  });


  return (
    <section className="pv4 bg-white bb b--black-10">
      <header className="tc">
        <h1 className="f4 f3-m f2-l fw2 black-90 mv5">
          hackathons
        </h1>
      </header>
      <div className="tc f5 f4-m f3-l fw2 black-70 pv2">
        {renderHackathons}
      </div>
    </section>
  );
}

export default Hackathons;
