import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import a11yReducer from './modules/a11y';
import authReducer from './modules/auth';
/**
 * @type {function}
 */
export default combineReducers({
  routerReducer,
  a11yReducer,
  authReducer,
});
