import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './search_form';

const mapStateToProps = state => {
  return {
    errors: state.errors
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
