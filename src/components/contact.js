import React, { Component } from 'react';

const Contact = () => {

  return (
    <section>
      <h2 className="f3 fw4 pa3 mv0">Contact</h2>

      <form className="pa4 black-80">
        <div className="measure">
          <label htmlFor="name" className="f6 b db mb2">Name</label>
          <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />

          <label htmlFor="email" className="f6 b db mb2">Email address</label>
          <input id="email" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" />
          <label htmlFor="comment" className="f6 b db mb2">Comments</label>
          <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"></textarea>
        </div>

        <div className="mt3">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Submit" />
        </div>


      </form>

    </section>
  );

}

export default Contact;
