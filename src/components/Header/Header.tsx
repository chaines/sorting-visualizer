import React, { useEffect } from 'react';

import './Header.css';

interface HeaderProps {
  speed: number,
  updateSpeed: (speed: number) => void,
  bars: Array<number>,
  resetBars: (numBars: number) => void,
  sort: (algorithm: string, arr:Array<number>) => void,
  visualizerState: string,
  clearSorted: () => void
}

const Header = ({speed, updateSpeed, bars, resetBars, sort, visualizerState, clearSorted}: HeaderProps) => {
  const sorting = visualizerState === 'sorting';
  useEffect(() => {
    if(!bars.length) {
      resetBars(50);
    }
  })
  return (
    <div id="header">
      <button disabled={sorting} onClick={() => {resetBars(50); clearSorted();}}>Randomize Array</button>
      <div>
        <div>Sorting Speed:</div>
        <input id="changeSpeed" type="range" min="90" max="100" onChange={(e: any) => updateSpeed((100-parseInt(e.target.value)) * 10)} value={100-(speed/10)}/>
      </div>
      <button disabled={sorting} onClick={() => sort('bubbleSort', bars)}>Bubble Sort</button>
      <button disabled={sorting} onClick={() => sort('mergeSort', bars)}>Merge Sort</button>
      <button disabled={sorting} onClick={() => sort('insertionSort', bars)}>Insertion Sort</button>
      <button disabled={sorting} onClick={() => sort('heapSort', bars)}>Heap Sort</button>
      <button disabled={sorting} onClick={() => sort('quickSort', bars)}>Quick Sort</button>
    </div>
  );
}

export default Header;