import React from 'react';
import { Link } from 'react-router-dom';
import FaVolumeUp from 'react-icons/lib/fa/volume-up';
import { AuthRoute } from '../../util/route_util';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

export default (props) => {
  if (props.currentUser) {
    return (
      <div>
        <h2>{props.currentUser.username}</h2>
        <button onClick={props.logout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="splash-background">
        <div className="splash-sign-in-div">
          <h2 className="logo-header sign-up-logo-header" ><FaVolumeUp />  Podify</h2>
          <Link className="green-button splash-button" to='/signup' >SIGN UP</Link>
          <br />
          <br />
          <div id="already">&mdash; ALREADY HAVE AN ACCOUNT? &mdash;</div>
          <br />
          <br />
          <Link className="green-button white-splash-button" to='/login' >LOG IN</Link>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
      </div>
    );
  }
};
