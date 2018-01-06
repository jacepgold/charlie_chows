import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import items from './items';

const rootReducer = combineReducers({
  user,
  flash,
  items,
});

export default rootReducer;
