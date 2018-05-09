import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './search_form';
import { requestAllPodcasts } from '../../actions/search_actions';

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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
