import { combineReducers } from 'redux';
import authReducer from './modules/auth';
import counterReducer from './modules/counter';

export default combineReducers({
  authReducer,
  counterReducer,
});
