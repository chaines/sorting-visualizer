import { setAllBars } from '../reducers/bars';
import { timeout, Time } from './helpers';
import { actions } from '../reducers/display';


export default async (array: Array<number>, dispatch: any) => {
  const time = new Time();
  let arr = array.slice();
  dispatch(actions.addSortedElement(0));
  dispatch(actions.setActiveBars([0,1])); 

  await timeout(time.time);
  for(let currMax = 1;  currMax < arr.length; currMax++) {
    let currVal = arr[currMax];
    for(let i = currMax - 1; i >= 0; i--) {
     dispatch(actions.setActiveBars([currMax, i]));
     await timeout(time.time);
     dispatch(actions.clearActiveBars());
      if(arr[i] <= currVal) {
       dispatch(actions.setSwapBars([i+1, currMax]));
       await timeout(time.time);
        arr[i+1] = currVal;
       dispatch(actions.clearSwapBars());
       dispatch(setAllBars(arr));
       dispatch(actions.addSortedElement(currMax));
       await timeout(time.time);
        break;
      } else {
       dispatch(actions.setSwapBars([i+1, i]));
       await timeout(time.time);
        arr[i+1] = arr[i];
        if(i === 0) {
         dispatch(setAllBars(arr));
         dispatch(actions.setSwapBars([i, currMax]));
         await timeout(time.time);
          arr[i] = currVal;
        }
      }
     dispatch(actions.clearSwapBars());
     dispatch(setAllBars(arr));
     dispatch(actions.addSortedElement(currMax));
     await timeout(time.time);
    }
  }
  dispatch(setAllBars(arr));
  dispatch(actions.visualizerSorted());
  time.unsubscribe();
};