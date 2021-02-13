import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div id="header">
      <button>Randomize Array</button>
      <div>
        <div>Sorting Speed:</div>
        <input id="changeSpeed" type="range" min="0" max="100" />
      </div>
      <button>Bubble Sort</button>
      <button>Merge Sort</button>
      <button>Insertion Sort</button>
      <button>Heap Sort</button>
      <button>Quick Sort</button>
    </div>
  );
}

export default Header;