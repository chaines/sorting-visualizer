import { timeout, range } from './helpers';
import { setActiveBars, clearActiveBars } from '../reducers/active';
import { setSwappers, clearSwappers } from '../reducers/swap';
import { setAllBars } from '../reducers/bars';
import { setSorting } from '../reducers/sorting';
import { addSortedElement, setSorted } from '../reducers/sorted';

export default async (array: Array<number>, speed: number, dispatch: any) => {

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

      dispatch(setActiveBars(range(start, stop)));
      await timeout(speed);

      /**
       * Partitioner
       */
      for (let i = pivotIndex - 1; i >= start; i--) {
        dispatch(setActiveBars([i, pivotIndex]));
        await timeout(speed);
        if (array[i] > pivotVal) {
          dispatch(setSwappers([i, pivotIndex - 1]));
          [array[i], array[pivotIndex - 1]] = [array[pivotIndex - 1], array[i]];
          await timeout(speed);
          dispatch(setAllBars(array));
          dispatch(setSwappers([pivotIndex - 1, pivotIndex]));
          await timeout(speed);
          [array[pivotIndex - 1], array[pivotIndex]] = [array[pivotIndex], array[pivotIndex - 1]];
          dispatch(setAllBars(array));
          dispatch(clearSwappers());
          pivotIndex--;
        }
        dispatch(clearActiveBars());
      }

      if (pivotIndex - 1 > start) {
        stack.push(start);
        stack.push(pivotIndex - 1);
      } else if (pivotIndex !== start) {
        dispatch(addSortedElement(start));
      }

      if (pivotIndex + 1 < stop) {
        stack.push(pivotIndex + 1);
        stack.push(stop);
      } else {
        dispatch(addSortedElement(stop));
      }
      dispatch(addSortedElement(pivotIndex));

    }
    return array;
  }
  const arr = await sort(array);
  console.log(arr);
  dispatch(setAllBars(arr));
  dispatch(setSorting(false));
};