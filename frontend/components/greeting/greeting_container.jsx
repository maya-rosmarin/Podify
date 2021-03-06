import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  const currentUserId = state.session.id;
  if (currentUserId) {
    return {
      currentUser: state.entities.users[currentUserId]
    };
  } else {
    return {
      currentUser: null
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { return dispatch(logout()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
