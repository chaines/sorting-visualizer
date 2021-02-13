import { connect } from 'react-redux';
import { setAll } from '../../reducers/bars';
import Visualizer from './Visualizer';

const mapStateToProps = (state) => ({
  bars: state.bars
});

const mapDispatchToProps = (dispatch) => ({
  resetBars: (barCount: number) => {
    const bars = [];
    for(let i = 0; i < barCount; i++) {
      bars.push(Math.floor(Math.random() * 100));
    }
    dispatch(setAll(bars));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Visualizer);