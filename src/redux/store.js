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
import rootReducer from './reducers';

import { DEBUG } from '../constant';
/**
 * @type {object} history
 */
export const history = createHistory();
/**
 * @type {array}
 */
const middlewares = [
  routerMiddleware(history),
  thunkMiddleware,
  authMiddleware,
];

if (DEBUG) {
  middlewares.push(createLogger());
}
/**
 * @type {function} configureStore
 * @param {object} preloadedState={}
 */
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
