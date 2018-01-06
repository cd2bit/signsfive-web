import * as types from './types';
import AuthService from '../../../utils/AuthService';

export function loginRequest() {
  AuthService.login();
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

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS,
  };
}

/*
export function loginUser() {
  return (dispatch) => {
    dispatch(loginRequest());
    return AuthService.handleAuthentication()
      .then(({idToken, accessToken, profile}) => {
        // redux to let know login was success
        dispatch(loginSuccess({idToken, accessToken, profile}))
      })
      .catch(err => dispatch(loginError(err)));
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(logoutRequest());
    AuthService.logout();
    dispatch(logoutSuccess());
  };
}
*/
