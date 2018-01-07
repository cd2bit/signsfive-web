import * as types from './types';
import AuthService from '../../../utils/AuthService';

export function loginStatus() {
  return {
    type: types.LOGIN_STATUS,
  };
}

export function loginRequest() {
  return {
    type: types.LOGIN_REQUEST,
  };
}

export function loginSuccess({ idToken, accessToken, profile }) {
  return {
    type: types.LOGIN_SUCCESS,
    idToken,
    accessToken,
    profile,
  };
}

export function notLoggedIn() {
  return {
    type: types.NOT_LOGGED_IN,
  };
}

export function loginError(error) {
  return {
    type: types.LOGIN_ERROR,
    error,
  };
}

export function logoutRequest() {
  return {
    type: types.LOGOUT_REQUEST,
  };
}

export function logoutSuccess(loggedOut) {
  return {
    type: types.LOGOUT_SUCCESS,
    action: {
      isLoggingOut: !loggedOut,
    },
  };
}

export function loginUser() {
  return (dispatch) => {
    dispatch(loginRequest());
    AuthService.login();
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(logoutRequest());
    AuthService.logout()
      .then(logged => dispatch(logoutSuccess(logged)));
  };
}
