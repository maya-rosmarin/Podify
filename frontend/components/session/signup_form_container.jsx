import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    formType: 'signup',
    header: <h1>Get the right podcasts, <br /> right now</h1>,
    errors: state.errors.session[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => { return dispatch(signup(user)); },
    clearErrors: () => { return dispatch(clearErrors()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
