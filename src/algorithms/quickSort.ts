import { timeout, range, Time } from './helpers';
import { actions } from '../reducers/display';
import { setAllBars } from '../reducers/bars';
import { clearCurrentArray } from '../reducers/display/current';

export default async (array: Array<number>, dispatch: any) => {
  const time = new Time();

  const sort = async (array: Array<number>)
    : Promise<ReadonlyArray<number>> => {
    const stack: Array<number> = [];

    stack.push(0);
    stack.push(array.length);

    while(stack.length) {
      const stop: number = stack.pop();
      const start: number = stack.pop();
      const pivotVal: number = array[stop];
      let pivotIndex: number = stop;

      dispatch(actions.setCurrentArray(range(start, stop)));
      await timeout(time.time);

      /**
       * Partitioner
       */
      for (let i = pivotIndex - 1; i >= start; i--) {
        dispatch(actions.setActiveBars([i, pivotIndex]));
        await timeout(time.time);
        if (array[i] > pivotVal) {
          dispatch(actions.setSwapBars([i, pivotIndex - 1]));
          [array[i], array[pivotIndex - 1]] = [array[pivotIndex - 1], array[i]];
          await timeout(time.time);
          dispatch(setAllBars(array));
          dispatch(actions.setSwapBars([pivotIndex - 1, pivotIndex]));
          await timeout(time.time);
          [array[pivotIndex - 1], array[pivotIndex]] = [array[pivotIndex], array[pivotIndex - 1]];
          dispatch(setAllBars(array));
          dispatch(actions.clearSwapBars());
          pivotIndex--;
        }
        dispatch(actions.clearActiveBars());
      }

      if (pivotIndex - 1 > start) {
        stack.push(start);
        stack.push(pivotIndex - 1);
      } else if (pivotIndex !== start) {
        dispatch(actions.addSortedElement(start));
      }

      if (pivotIndex + 1 < stop) {
        stack.push(pivotIndex + 1);
        stack.push(stop);
      } else {
        dispatch(actions.addSortedElement(stop));
      }
      dispatch(actions.addSortedElement(pivotIndex));

    }
    return array;
  }
  const arr = await sort(array);
  time.unsubscribe()
  dispatch(setAllBars(arr));
  dispatch(clearCurrentArray());
  dispatch(actions.visualizerSorted());
};