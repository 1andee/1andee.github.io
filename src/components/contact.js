import React, { Component } from 'react';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isSending: false,
      isEmailSent: false,
      name: '',
      email: '',
      subject: '',
      comment: '',
      touched: {
        name: false,
        email: false,
        comment: false
      }
    }

    this.onInputChange = this.onInputChange.bind(this);

  }

  onInputChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ isSending: true });
    this.sendForm();
  }

  sendForm() {
    let { name, email, subject, comment } = this.state;

    if (subject) {
      // honeypot
      return
    }

    var request = new XMLHttpRequest();
    request.open('POST', 'https://script.google.com/macros/s/AKfycbyZeVWo9ogemJl3YQ9caeq8hE8fMUCCv-5QHbxxdEtuccfohZzV/exec', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(`name=${name}&email=${email}&comment=${comment}`)

    request.onload = () => {
      if (request.status === 200) {
        // request successfully delivered / sent to google
        this.setState({ isSending: false });
        this.setState({ isEmailSent: true });
      }
    }
  }

  render() {

    let { name, email, comment } = this.state;

    function validateForm(name, email, comment) {
      return {
        name: name.length === 0,
        email: email.length === 0,
        comment: comment.length === 0,
      };
    }

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    const errors = validateForm(name, email, comment);
    const isEnabled = !Object.keys(errors).some(x => errors[x]);

    let sentStatus = null;
    const isSending = this.state.isSending;
    const isEmailSent = this.state.isEmailSent;

    if (isSending) {
      sentStatus = <i className="fa fa-spinner fa-pulse fa-3x fa-fw black-70 pt2-ns" />;
    } else if (isEmailSent) {
      sentStatus = <img src="https://i.giphy.com/media/8GY3UiUjwKwhO/source.gif" className="h4 fade-in"/>;
      let form = document.getElementById("contact-form");
      form.reset();
    } else {
      sentStatus = '';
   }

    return (
      <section className="pv4">
        <header className="tc">
          <h1 className="f4 f3-m f2-l fw2 black-90 mv4">
            contact
          </h1>
        </header>

        <form className="pa4" id="contact-form" onSubmit={this.onSubmit} >

          <div className="measure center">

            <label htmlFor="name" className="f6 b db mb2">Name</label>
            <input
              id="name"
              name="name"
              className={`input-reset ba b--black-20 pa2 mb2 db w-100 ${shouldMarkError('name') ? "error" : ""}`}
              onBlur={this.handleBlur('name')}
              type="text"
              value={this.state.name}
              onChange={this.onInputChange}
            />

            <label htmlFor="email" className="f6 b db mb2">Email address</label>
            <input
              id="email"
              name="email"
              className={`input-reset ba b--black-20 pa2 mb2 db w-100 ${shouldMarkError('email') ? "error" : ""}`}
              onBlur={this.handleBlur('email')}
              type="text"
              value={this.state.email}
              onChange={this.onInputChange}
            />

            <label htmlFor="comment" className="f6 b db mb2">Comments</label>
            <textarea
              id="comment"
              name="comment"
              className={`db border-box hover-black w-100 measure ba b--black-20 pa2 mb2 ${shouldMarkError('comment') ? "error" : ""}`}
              onBlur={this.handleBlur('comment')}
              rows="6"
              value={this.state.comment}
              onChange={this.onInputChange}
            />
          </div>

          <input
            id="subject"
            type="text"
            name="subject"
            size="30"
            value={this.state.subject}
            onChange={this.onInputChange}
          />

          <div className="mt3 tc">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
              type="submit"
              value="submit"
              disabled={!isEnabled}
            />
          <br/><br/>
          {sentStatus}
          </div>
        </form>


      </section>
    );
  }

}

export default Contact;
