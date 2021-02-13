import { connect } from 'react-redux';
import { setAllBars } from '../../reducers/bars';
import Visualizer from './Visualizer';

const mapStateToProps = (state) => ({
  bars: state.bars,
  active: state.active,
  swap: state.swap,
  sorted: state.sorted
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Visualizer);