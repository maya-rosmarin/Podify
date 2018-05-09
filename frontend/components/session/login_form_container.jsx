import React from 'react';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    formType: 'login',
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => { return dispatch(login(user)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
