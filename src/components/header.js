import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Link = Scroll.Link;

const Header = () => {
    return (
      <header id="very-top" className="vh-100 dt w-100">

        <div className="dtc v-mid tc ph3 ph4-l">

        <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAqkAAAAJGMxMjExNjhlLWIwYjgtNGNkZC04OGQxLTRmZTc2MjI5YTcwMw.jpg" className="br-100 pa1 ba b--black-10 h4 w4" alt="avatar" />
        <h1 className="f3 f2-ns fw2 ttu tracked">Ian Duke</h1>
        <h2 className="f6 gray fw2 ttu tracked">web developer</h2>

        <h2 className="f5 f4-m f3-l fw2 black-70 pv5">
          experienced manager, speaker & full-stack developer seeking a junior dev position
        </h2>

        <Link to="skillz" smooth={true} duration={500}>
          <i className="fa fa-angle-double-down fa-2x black-80 bounce animated pv4 link pointer" aria-hidden="true"></i>
        </Link>

        </div>

    </header>
    );
}

export default Header;
