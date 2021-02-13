import React, { useEffect } from 'react';

import Bar from './BarContainer';

import './Visualizer.css';

interface VisualizerProps {
  bars: Array<number>,
  active: Array<number>,
  swap: Array<number>,
  sorted: Array<number>,
  current: Array<number>,
  visualizerState: string
}

const Visualizer = ({bars, active, swap, sorted, current, visualizerState}: VisualizerProps) => {

  return (
    <div id="visualizer" className={visualizerState}>
      {bars.map((bar, i) => {
        let selected = active.includes(i);
        let swapBool = swap.includes(i);
        let sortedBool = sorted.includes(i);
        let currentBool = current.includes(i);
        return (<Bar height={bar} sorted={sortedBool} current={currentBool} selected={selected} swap={swapBool} key={i}/>)
      })}
    </div>
  );
}

export default Visualizer;