import { compose, createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import authMiddleware from './modules/auth/middleware';
import rootReducer from './../redux/reducer';


const middlewares = [
  thunkMiddleware,
  authMiddleware,
];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

export default function configureStore(preloadedState) {
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
