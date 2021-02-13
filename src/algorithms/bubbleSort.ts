import { timeout } from './helpers';
import { setActiveBars, clearActiveBars } from '../reducers/active';
import { setSwappers, clearSwappers } from '../reducers/swap';
import { setAllBars } from '../reducers/bars';
import { setSorting } from '../reducers/sorting';
import { addSortedElement, setSorted } from '../reducers/sorted';

export default async (array: Array<number>, speed: number, dispatch: any) => {
  let arr = array.slice();
  let sorted = false;
  let rounds = 1;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - rounds; i++) {
      dispatch(setActiveBars([i, i+1]));
      if (arr[i] > arr[i+1]) {
        sorted = false;
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        await timeout(speed);
        dispatch(clearActiveBars());
        dispatch(setSwappers([i, i+1]));
        await timeout(speed);
        dispatch(setAllBars(arr));
        await timeout(speed);
        dispatch(clearSwappers());
      } else {
        await timeout(speed);
        dispatch(clearActiveBars());
      }
    }
    dispatch(addSortedElement(arr.length - rounds));
    rounds++;
  }
  dispatch(setSorted(Object.keys(arr).map(k => parseInt(k))));
  dispatch(setSorting(false));
};