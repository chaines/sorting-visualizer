import React from 'react';

import './Bar.css';

interface BarProps {
  height: number
}

const Bar = ({height}: BarProps) => {
  return (
    <div className="bar" style={{height: height + "%"}}></div>
  )
}

export default Bar;