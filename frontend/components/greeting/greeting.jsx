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
      <div>
        <Link to='/signup' >SIGN UP</Link>
        <br />
        <Link to='/login' >LOG IN</Link>
      </div>
    );
  }
};
