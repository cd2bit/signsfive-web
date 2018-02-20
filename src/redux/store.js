/**
 * @external {redux} https://redux.js.org
 */
import { compose, createStore, applyMiddleware } from 'redux';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
/**
 * @external {redux-logger} https://github.com/evgenyrodionov/redux-logger
 */
import { createLogger } from 'redux-logger';
/**
 * @external {redux-thunk} https://github.com/gaearon/redux-thunk
 */
import thunkMiddleware from 'redux-thunk';

import authMiddleware from './modules/auth/middleware';
import rootReducer from './../redux/reducer';

import { DEBUG } from '../constant';

export const history = createHistory();

const middlewares = [
  routerMiddleware(history),
  thunkMiddleware,
  authMiddleware,
];

if (DEBUG) {
  middlewares.push(createLogger());
}

export function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middlewares),
      // Conditionally add the Redux DevTools extension enhancer if it is installed.
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
}
