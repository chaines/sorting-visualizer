import { connect } from 'react-redux';
import { setAllBars } from '../../reducers/bars';
import { setSpeed } from '../../reducers/speed';
import { actions } from '../../reducers/display';
import sorts from '../../algorithms';
import Header from './Header';

const mapStateToProps = (state) => ({
  speed: state.speed,
  bars: state.bars,
  visualizerState: state.display.state
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
    dispatch(actions.visualizerUnsorted());
    dispatch(setAllBars(bars));
  },
  sort: (algorithm: string, arr:Array<number>) => {
    dispatch(actions.visualizerSorting());
    sorts[algorithm](arr, dispatch);
  },
  clearSorted: () => dispatch(actions.clearSorted())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);