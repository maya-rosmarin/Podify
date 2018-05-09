import React from 'react';
import FaSearch from 'react-icons/lib/fa/search'
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import FaUser from 'react-icons/lib/fa/user';
import FaSignout from 'react-icons/lib/fa/sign-out';
import FaHome from 'react-icons/lib/fa/home';

export default (props) => {
  debugger
  return (
    <ul className="nav-bar">
      <li><Link className="search-link" to='/search'><FaSearch />     Search</Link>
      <br />
      <br />
      <Link className="search-link" to='/'><FaHome />     Home</Link></li>
      <div className="nav-bottom">
        <li><button className="logout-button" onClick={props.logout}><FaSignout />     Logout</button></li>
        <li className="username"><FaUser /> {props.currentUser.username}</li>
      </div>
    </ul>
  );
};
