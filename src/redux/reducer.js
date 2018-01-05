import { combineReducers } from 'redux';
import counterReducer from './modules/counter';

export default combineReducers({
  counterReducer,
});
