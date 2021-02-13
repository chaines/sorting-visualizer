import { combineReducers } from 'redux';
import activeReducer, { setActiveBars, clearActiveBars } from './active';
import sortedReducer, { setSorted, clearSorted, addSortedElement } from './sorted';
import swapReducer, { setSwapBars, clearSwapBars } from './swap';
import stateReducer, { visualizerSorted, visualizerSorting, visualizerUnsorted } from './state';
import currentReducer, { setCurrentArray, clearCurrentArray } from './current';

export const actions = {
  setActiveBars, 
  clearActiveBars, 
  setSorted, 
  clearSorted, 
  addSortedElement, 
  setSwapBars, 
  clearSwapBars,
  visualizerSorted,
  visualizerSorting,
  visualizerUnsorted,
  setCurrentArray,
  clearCurrentArray
};

export default combineReducers({
  active: activeReducer,
  sorted: sortedReducer,
  swap: swapReducer,
  state: stateReducer,
  current: currentReducer
});