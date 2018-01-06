import * as types from './types';
import AuthService from '../../../utils/AuthService';

const initialState = {
  isAuthenticated: !AuthService.isTokenExpired(),
  isFetching: false,
  isLoggingOut: false,
  profile: AuthService.getProfile(),
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        idToken: action.idToken,
        accessToken: action.accessToken,
        profile: action.profile,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        profile: {},
        error: action.error,
      };
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        error: null,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        profile: {},
      };
    default:
      return state;
  }
}
