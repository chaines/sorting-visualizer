import { timeout, Time } from './helpers';
import { actions } from '../reducers/display';
import { setAllBars } from '../reducers/bars';

export default async (array: Array<number>, dispatch: any) => {

  //Sort the array into a 'max-heap'
  const heapIt = async (array: Array<number>, length: number = array.length, i: number = 0) => {
    let stack = [];

    stack.push(i);
    while(stack.length) {
      let max = stack.pop();
      let i = max;
      let left = max*2 + 1;
      let right = max*2 + 2;
      dispatch(actions.setActiveBars([i, left, right]));
      await timeout(time.time);

      if(left < length && array[left] > array[max]) {
        max = left;
      }
      if (right < length && array[right] > array[max]) {
        max = right;
      }
  
      if (max !== i) {
        dispatch(actions.setSwapBars([max, i]));
        await timeout(time.time);
        [array[i], array[max]] = [array[max], array[i]];
        dispatch(setAllBars(array));
        await timeout(time.time);
        dispatch(actions.clearSwapBars());
        dispatch(actions.clearActiveBars());
        stack.push(max);
      }
    }
  }

  array = array.slice();
  let time = new Time();

  for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
    await heapIt(array, array.length, i);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    dispatch(actions.setSwapBars([0,i]));
    await timeout(time.time);
    dispatch(actions.clearSwapBars());
    dispatch(actions.addSortedElement(i));
    await timeout(time.time);
    await heapIt(array, i, 0);
  }
  dispatch(actions.clearActiveBars());
  dispatch(setAllBars(array));
  dispatch(actions.visualizerSorted());
};