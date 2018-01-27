import * as types from './types';

import AuthService from '../../../utils/AuthService';

import { notLoggedIn, isLoggedIn, loginSuccess } from './actions';

const authMiddleware = store => next => (action) => {
  if (action.type === types.LOGIN_STATUS) {
    AuthService.handleAuthentication()
      .then((authResult) => {
        const isAuthenticated = AuthService.isAuthenticated();
        if (!authResult && !isAuthenticated) {
          store.dispatch(notLoggedIn());
        } else if (!authResult && isAuthenticated) {
          store.dispatch(isLoggedIn(authResult));
        } else {
          window.history.replaceState({}, document.title, '.');
          store.dispatch(loginSuccess(authResult));
        }
        next(action);
      }).catch((err) => {
        // NOTE: we will want to somehow log this error
        // instead of using console.err
        // NOTE: kept here for dev purpose
        // once Auth0 is completed, we can remove this
        // eslint-disable-next-line no-console
        console.log('err', err);
        next(action);
      });
  }
  next(action);
};

export default authMiddleware;
