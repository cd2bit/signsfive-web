import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from './modules/auth';

export default combineReducers({
  routerReducer,
  authReducer,
});
