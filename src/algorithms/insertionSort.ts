import { setActiveBars, clearActiveBars } from '../reducers/active';
import { setSwappers, clearSwappers } from '../reducers/swap';
import { setAllBars } from '../reducers/bars';
import { setSorting } from '../reducers/sorting';
import { addSortedElement } from '../reducers/sorted';
import { timeout } from './helpers';


export default async (array: Array<number>, speed: number, dispatch: any) => {
  let arr = array.slice();
 dispatch(addSortedElement(0));
 dispatch(setActiveBars([0,1])); 
 await timeout(speed);
  for(let currMax = 1;  currMax < arr.length; currMax++) {
    let currVal = arr[currMax];
    for(let i = currMax - 1; i >= 0; i--) {
     dispatch(setActiveBars([currMax, i]));
     await timeout(speed);
     dispatch(clearActiveBars());
      if(arr[i] <= currVal) {
       dispatch(setSwappers([i+1, currMax]));
       await timeout(speed);
        arr[i+1] = currVal;
       dispatch(clearSwappers());
       dispatch(setAllBars(arr));
       dispatch(addSortedElement(currMax));
       await timeout(speed);
        break;
      } else {
       dispatch(setSwappers([i+1, i]));
       await timeout(speed);
        arr[i+1] = arr[i];
        if(i === 0) {
         dispatch(setAllBars(arr));
         dispatch(setSwappers([i, currMax]));
         await timeout(speed);
          arr[i] = currVal;
        }
      }
     dispatch(clearSwappers());
     dispatch(setAllBars(arr));
     dispatch(addSortedElement(currMax));
     await timeout(speed);
    }
  }
  dispatch(setAllBars(arr));
  dispatch(setSorting(false));
};