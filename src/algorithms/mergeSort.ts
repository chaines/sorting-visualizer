import { setAllBars } from "../reducers/bars";
import { actions } from '../reducers/display';
import { timeout, Time } from './helpers';

export default async (array: Array<number>, dispatch) => {
  const time = new Time();
  let arr2d = [];
  let tmp = [];
  let last = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > last) {
      dispatch(actions.addActiveBar(i));
      await timeout(time.time);
      tmp.push(array[i]);
    } else {
      dispatch(actions.setActiveBars([i]));
      await timeout(time.time);
      arr2d.push(tmp); // push the 'pre-sorted' subarr
      tmp = [array[i]]; // reset tmp to just contain the currentElement
    }
    last = array[i];
  }
  arr2d.push(tmp);
  dispatch(actions.clearActiveBars());
  while(arr2d.length > 1) {
    let merged = [];
    for (let i = 0; i < arr2d.length; i += 2) {
      if (i + 1 === arr2d.length) {
        // We're on the last element, so no merging can be done, just push it.
        merged.push(arr2d[i]);
        break;
      }
      let a = arr2d[i];
      let b = arr2d[i + 1];
      let aI = 0;
      let bI = 0;
      let m = [];
      // Horrible naming conventions: merge logic is same as previous solution though.
      while (aI < a.length && bI < b.length) {
        if (a[aI] <= b[bI]) { // once again <= ensures stability
          m.push(a[aI++]);
        } else {
          m.push(b[bI++]);
        }
      }
      if (aI === a.length) {
        m = [...m, ...b.slice(bI)];
      } else if (bI === b.length) {
        m = [...m, ...a.slice(aI)];
      }
      merged.push(m);
    }
    arr2d = merged;
  }
  dispatch(setAllBars(arr2d[0]));
  dispatch(actions.visualizerSorted());
  return arr2d[0];
};