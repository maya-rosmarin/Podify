import React from 'react';
import FaSearch from 'react-icons/lib/fa/search'
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import FaUser from 'react-icons/lib/fa/user';
import FaSignout from 'react-icons/lib/fa/sign-out';
import FaHome from 'react-icons/lib/fa/home';
import FaVolumeUp from 'react-icons/lib/fa/volume-up';
import FaList from 'react-icons/lib/fa/list';

export default (props) => {
  return (
    <ul className="nav-bar">
      <FaVolumeUp className="username vol-icon" />
      <li className="top-two-nav"><Link className="search-link" to="/search"><FaSearch className="nav-icon" />     Search</Link>
      <br />
      <br />
      <Link className="search-link" to="/home"><FaHome className="nav-icon" />     Home</Link>
      <br />
      <br />
      <Link className="search-link" to="/my_podcasts"><FaVolumeUp className="nav-icon"/>       Your Podcasts</Link>
      <br />
      <br />
      <Link className="search-link" to="/my_playlists"><FaList className="nav-icon" />      Your Playlists</Link></li>
      <div className="nav-bottom">
        <li><button className="logout-button" onClick={props.logout}><FaSignout />     Logout</button></li>
        <li className="username">  <FaUser />  {props.currentUser.username}</li>
      </div>
    </ul>
  );
};
