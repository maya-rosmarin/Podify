import React from 'react';
import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { requestAllPodcasts, clearPodcastState, requestSinglePodcast } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  
  let currentUserId = state.session.id;
  return {
    currentUser: state.entities.users[currentUserId],
    podcasts: Object.values(state.entities.remotePodcasts)
    };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllPodcasts: (searchQuery) => {
      return dispatch(requestAllPodcasts(searchQuery))
    },
    clearPodcastState: () => dispatch(clearPodcastState()),
    requestSinglePodcast: (searchQuery) => dispatch(requestSinglePodcast(searchQuery)),
    logout: () => { return dispatch(logout()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
