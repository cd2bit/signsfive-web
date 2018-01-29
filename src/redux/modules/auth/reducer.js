import * as types from './types';
import AuthService from '../../../utils/AuthService';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  isLoggingOut: false,
  accessToken: null,
  idToken: null,
  profile: {},
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.NOT_LOGGED_IN:
      return initialState;
    case types.IS_LOGGED_IN:
    case types.LOGIN_STATUS:
      return {
        ...state,
        isAuthenticated: AuthService.isAuthenticated(),
        accessToken: AuthService.getAccessToken(),
        idToken: AuthService.getIdToken(),
        profile: AuthService.getProfile(),
        error: null,
      };
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
        profile: {},
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: AuthService.isAuthenticated(),
        isLoggingOut: action.isLoggingOut,
      };
    default:
      return state;
  }
}
