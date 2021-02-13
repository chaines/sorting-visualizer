import { connect } from 'react-redux';
import { setAllBars } from '../../reducers/bars';
import { setSpeed } from '../../reducers/speed';
import { setSorting } from '../../reducers/sorting';
import { clearSorted } from '../../reducers/sorted';
import sorts from '../../algorithms';
import Header from './Header';

const mapStateToProps = (state) => ({
  speed: state.speed,
  bars: state.bars,
  sorting: state.sorting
});
const mapDispatchToProps = (dispatch) => ({
  updateSpeed: (speed: number) => {
    console.log(speed);
    dispatch(setSpeed(speed));
  },
  resetBars: (barCount: number) => {
    const bars = [];
    for(let i = 0; i < barCount; i++) {
      bars.push(Math.floor(Math.random() * 95) + 5);
    }
    dispatch(setAllBars(bars));
  },
  sort: (algorithm: string, arr:Array<number>, speed:number) => {
    dispatch(setSorting(true));
    sorts[algorithm](arr, speed, dispatch);
  },
  clearSorted: () => dispatch(clearSorted())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);