import { combineReducers } from 'redux';
import bars from './bars';
import speed from './speed';
import sorting from './sorting';
import swap from './swap';
import active from './active';
import sorted from './sorted';

export default combineReducers({
  bars,
  speed,
  sorting,
  active,
  swap,
  sorted
});