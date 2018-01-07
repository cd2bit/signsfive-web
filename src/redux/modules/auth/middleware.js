import AuthService from '../../../utils/AuthService';

import { loginSuccess } from './actions';

const authMiddleware = store => next => (action) => {
  AuthService.handleAuthentication()
    .then((authResult) => {
      window.location.href = '/';
      store.dispatch(loginSuccess(authResult));
      next(action);
    }).catch(() => {
      // NOTE: kept here for dev purpose
      // once Auth0 is completed, we can remove this
      // NOTE: this is actually not true error
      console.log('err', err);
      const isAuthenticated = AuthService.isAuthenticated();
      if (isAuthenticated) {
        // NOTE: kept here for dev purpose
        // once Auth0 is completed, we can remove this
        console.log('authMiddleware: isAuthenticated: ', isAuthenticated);
      }
      next(action);
    });
};

export default authMiddleware;
