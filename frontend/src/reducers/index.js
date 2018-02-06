import { combineReducers } from 'redux';
import authentication from './authentication';
import cliente from './cliente';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
  authentication,
  cliente,
  routing
});
