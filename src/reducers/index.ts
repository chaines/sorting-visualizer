import { combineReducers } from 'redux';
import barsReducer from './bars';
import speedReducer from './speed';
import displayReducer, { actions } from './display'

export default combineReducers({
  bars: barsReducer,
  speed: speedReducer,
  display: displayReducer
});