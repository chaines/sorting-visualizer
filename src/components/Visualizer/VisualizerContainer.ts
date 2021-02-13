import { connect } from 'react-redux';
import { setAllBars } from '../../reducers/bars';
import Visualizer from './Visualizer';

const mapStateToProps = (state) => ({
  bars: state.bars,
  active: state.display.active,
  swap: state.display.swap,
  sorted: state.display.sorted,
  current: state.display.current,
  visualizerState: state.display.state
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Visualizer);