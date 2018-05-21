import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user).then((userInfo) => dispatch(receiveCurrentUser(userInfo)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout().then(() => dispatch(logoutCurrentUser()), (errors) => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user).then((userInfo) => dispatch(receiveCurrentUser(userInfo)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}
