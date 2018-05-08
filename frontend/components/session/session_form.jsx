import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'

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
    let header, link, linkText, buttonText, linkPrompt;
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
    };

    return (
      <div className="session-form">
        <h4 id="sign-up-header">{header}</h4>
          <div>{this.props.errors}</div>
          <form className="user-input" onSubmit={this.handleSubmit}>
            <input className="input-field" onChange={this.update("username")} type="text" value={this.state.username} placeholder="Email" />
            <br />
            <input className="input-field" onChange={this.update("password")} type="password" value={this.state.password} placeholder="Password" />
            <br />
            <button className="green-button">{buttonText}</button>
            <br />
          </form>
          <div>{linkPrompt}<Link className="linkText" to={link}>{linkText}</Link></div>
      </div>
    )
  }
};

export default SessionForm;
