import AuthService from '../../../utils/AuthService';

import { loginSuccess } from './actions';

const authMiddleware = store => next => (action) => {
  AuthService.handleAuthentication()
    .then((authResult) => {
      window.location.href = '/';
      store.dispatch(loginSuccess(authResult));
      next(action);
    }).catch(() => {
      // this is actually not true error
      // console.log('err', err);
      const isAuthenticated = AuthService.isAuthenticated();
      if (isAuthenticated) {
        console.log('getProfile: ', AuthService.getProfile());
      }
      next(action);
    });
};

export default authMiddleware;
