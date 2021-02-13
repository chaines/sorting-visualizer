import React, { useEffect } from 'react';

import Bar from './BarContainer';

import './Visualizer.css';

interface VisualizerProps {
  bars: Array<number>,
  active: Array<number>,
  swap: Array<number>,
  sorted: Array<number>
}

const Visualizer = ({bars, active, swap, sorted}: VisualizerProps) => {


  return (
    <div id="visualizer">
      {bars.map((bar, i) => {
        let selected = active.includes(i);
        let swapBool = swap.includes(i);
        let sortedBool = sorted.includes(i);
        return (<Bar height={bar} sorted={sortedBool} selected={selected} swap={swapBool} key={i}/>)
      })}
    </div>
  );
}

export default Visualizer;