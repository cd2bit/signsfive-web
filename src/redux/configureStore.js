import { compose, createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducer';


const middlewares = [thunkMiddleware];
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
