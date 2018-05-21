import React from 'react';
import { Link } from 'react-router-dom';
import FaVolumeUp from 'react-icons/lib/fa/volume-up';
import FaCheckMark from 'react-icons/lib/fa/check';
import FaUser from 'react-icons/lib/fa/user';
import FaGit from 'react-icons/lib/fa/github';
import FaLI from 'react-icons/lib/fa/linkedin';
import FaAngellist from 'react-icons/lib/fa/angellist';
import { AuthRoute } from '../../util/route_util';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import MainContainer from '../main/main_container';

export default (props) => {
  if (props.currentUser) {
    return (
      <MainContainer />
    );
  } else {
    return (
      <div className="splash-background">
        <div className="splash-sign-in-div">
          <div className="contact-info">
          <div className="contact"><a href="https://github.com/maya-rosmarin"><FaGit /></a></div>
          <div className="contact"><a href="https://www.linkedin.com/in/maya-rosmarin-170794b5/"><FaLI /></a></div>
          <div className="contact"><a href="https://angel.co/maya-rosmarin"><FaAngellist /></a></div>
          </div>
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
        <div className="splash-page-right-teaser">
          <p className="green-splash-text">Get the right podcasts, <br /> right now</p>
          <p className="white-big-splash-text">Listen to thousands of podcasts for free</p>
          <p className="white-little-splash-text"><FaCheckMark className="check"/> Search and discover podcasts you'll love</p>
          <p className="white-little-splash-text"><FaCheckMark className="check"/> Create playlists of your favorite podcasts</p>
      </div>
    </div>
    );
  }
};
