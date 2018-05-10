import React from 'react';
import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { requestAllPodcasts } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  let currentUserId = state.session.id;
  return {
    errors: state.errors,
    currentUser: state.entities.users[currentUserId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllPodcasts: (searchQuery) => {
      return dispatch(requestAllPodcasts(searchQuery))
    },
    logout: () => { return dispatch(logout()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
