import { timeout, Time } from './helpers';
import { setAllBars } from '../reducers/bars';
import { actions } from '../reducers/display';

export default async (array: Array<number>, dispatch: any) => {
  const time = new Time();
  let arr = array.slice();
  let sorted = false;
  let rounds = 1;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - rounds; i++) {
      dispatch(actions.setActiveBars([i, i+1]));
      if (arr[i] > arr[i+1]) {
        sorted = false;
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        await timeout(time.time);
        dispatch(actions.clearActiveBars());
        dispatch(actions.setSwapBars([i, i+1]));
        await timeout(time.time);
        dispatch(setAllBars(arr));
        await timeout(time.time);
        dispatch(actions.clearSwapBars());
      } else {
        await timeout(time.time);
        dispatch(actions.clearActiveBars());
      }
    }
    dispatch(actions.addSortedElement(arr.length - rounds));
    rounds++;
  }
  time.unsubscribe();
  dispatch(actions.setSorted(Object.keys(arr).map(k => parseInt(k))));
  dispatch(actions.visualizerSorted());
};