import React from 'react';
import FaSearch from 'react-icons/lib/fa/search'
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import FaUser from 'react-icons/lib/fa/user';
import FaSignout from 'react-icons/lib/fa/sign-out';
import FaHome from 'react-icons/lib/fa/home';
import FaVolumeUp from 'react-icons/lib/fa/volume-up';

export default (props) => {
  return (
    <ul className="nav-bar">
      <FaVolumeUp className="username vol-icon" />
      <li className="top-two-nav"><Link className="search-link" to="/search"><FaSearch className="nav-icon" />     Search</Link>
      <br />
      <br />
      <Link className="search-link" to="/"><FaHome className="nav-icon" />     Home</Link>
      <br />
      <br />
      <Link className="search-link" to="/my_podcasts"><FaVolumeUp className="nav-icon"/>       Your Podcasts</Link></li>
      <div className="nav-bottom">
        <li><button className="logout-button" onClick={props.logout}><FaSignout />     Logout</button></li>
        <li className="username">  <FaUser />  {props.currentUser.username}</li>
      </div>
    </ul>
  );
};
