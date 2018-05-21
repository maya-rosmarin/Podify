import React from 'react';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    formType: 'login',
    errors: state.errors.session[0]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => { return dispatch(login(user)); },
    clearErrors: () => { return dispatch(clearErrors()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
