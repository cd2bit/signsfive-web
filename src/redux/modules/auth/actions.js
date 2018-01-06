import * as types from './types';
import AuthService from '../../../utils/AuthService';

export function loginRequest() {
  return {
    type: types.LOGIN_REQUEST,
  };
}

export function loginSuccess(profile) {
  return {
    type: types.LOGIN_SUCCESS,
    profile,
  };
}

export function loginError(error) {
  return {
    type: types.LOGIN_ERROR,
    error,
  };
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS,
  };
}

export function processAuthentication() {
  return (dispatch) => {
    dispatch(loginRequest());
    return AuthService.handleAuthentication()
      .then(profile = {
        // redux to let know login was success
        dispatch(loginSuccess(profile))
      }
      // redux to let know login was not success
      .catch(err => dispatch(loginError(err)));
  };
}
