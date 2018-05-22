import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import FaVolumeUp from 'react-icons/lib/fa/volume-up';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit (e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user);
  }

  update (field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render () {
    let header, link, linkText, buttonText, linkPrompt, guestUser, guestLink, errors;
    if (this.props.formType === 'signup') {
      header = "Sign up with your email address",
      link = "/login",
      linkPrompt = "Already have an account? "
      linkText = "Log in",
      buttonText = "SIGN UP"
    } else {
      header = "",
      link = "/signup",
      linkText = "Sign up",
      buttonText = "LOG IN",
      linkPrompt = "Don't have an account? "
      guestUser = "Sign in as "
      guestLink = "Guest User"
    };
    debugger
    if (this.props.errors) {
      errors = this.props.errors.map(error => <li>{error}</li>)
    }

    return (
      <div className="session-form">
        <h2 className="logo-header" ><FaVolumeUp />  Podify</h2>
        <h4 className="sign-up-header">{header}</h4>
          <ul className="errors">{errors}</ul>
          <form className="user-input" onSubmit={this.handleSubmit}>
            <input className="input-field" onChange={this.update("username")} type="text" value={this.state.username} placeholder="Email" />
            <br />
            <input className="input-field" onChange={this.update("password")} type="password" value={this.state.password} placeholder="Password" />
            <br />
            <button className="green-button">{buttonText}</button>
            <br />
          </form>
          <div>{linkPrompt}<Link onClick={this.props.clearErrors} className="linkText" to={link}>{linkText}</Link></div>
          <br />
          <div>{guestUser} <button onClick={() => {this.props.processForm({username: 'Guest', password: 'password'})}} className="linkText guest">{guestLink}</button></div>
      </div>
    )
  }
};

export default SessionForm;
