import React from 'react';

import './Bar.css';

interface BarProps {
  height: number,
  selected: boolean,
  swap: boolean,
  sorted: boolean,
  current: boolean
}

const Bar = ({height, selected, swap, sorted, current}: BarProps) => {
  let className = 'bar' + 
    (selected ? ' selected' : '') + 
    (swap ? ' swap' : '') +
    (sorted ? ' sorted' : '') + 
    (current ? ' current' : '');
  return (
    <div className={className} style={{height: height + "%"}}></div>
  )
}

export default Bar;