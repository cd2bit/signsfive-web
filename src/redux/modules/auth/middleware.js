// import { push } from 'react-router-redux';

import * as types from './types';
import AuthService from '../../../utils/AuthService';
import { notLoggedIn, isLoggedIn, loginSuccess } from './actions';

const authMiddleware = ({ dispatch }) => next => (action) => {
  if (action.type === types.LOGIN_STATUS) {
    AuthService.handleAuthentication()
      .then((authResult) => {
        const isAuthenticated = AuthService.isAuthenticated();
        if (!authResult && !isAuthenticated) {
          dispatch(notLoggedIn());
        } else if (!authResult && isAuthenticated) {
          dispatch(isLoggedIn());
        } else {
          window.history.replaceState({}, document.title, '.');
          dispatch(loginSuccess(authResult));
          // we can use "push" to control the path we want to redirect
          // but this still redirect form '/' to '/foo'
          // dispatch(push('/foo'));
        }
      }).catch((err) => {
        // NOTE: we will want to somehow log this error
        // instead of using console.err
        // NOTE: kept here for dev purpose
        // once Auth0 is completed, we can remove this
        // eslint-disable-next-line no-console
        console.log('err', err);
      });
  }
  next(action);
};

export default authMiddleware;
