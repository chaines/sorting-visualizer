import React, { useEffect } from 'react';

import Bar from './BarContainer';

import './Visualizer.css';

const Visualizer = (props) => {

  useEffect(() => {
    if (!props.bars.length) {
      console.log('Making bars');
      props.resetBars(100);
    }
  });

  return (
    <div id="visualizer">
      {props.bars.map((bar) => (<Bar height={bar} />))}
    </div>
  );
}

export default Visualizer;