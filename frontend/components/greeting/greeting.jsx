import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link className="green-button splash-button" to='/signup' >SIGN UP</Link>
          <br />
          <br />
          <div id="already">&mdash; ALREADY HAVE AN ACCOUNT? &mdash;</div>
          <br />
          <br />
          <Link className="green-button white-splash-button" to='/login' >LOG IN</Link>
        </div>
      </div>
    );
  }
};
