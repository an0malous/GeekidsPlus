
import { connect } from 'react-redux';

import { onRoundStart, onGameOver, onGameEnd } from '../../actions/phonicsGameActions';
const RoundBreakdown = (props) => {
  
            return props.render(props)
}
   


const mapStateToProps = state => ({
    roundPoints: state.phonicsGameReducer.roundPoints,
    totalGamePoints: state.phonicsGameReducer.totalGamePoints,
    currentElapsedTime: state.phonicsGameReducer.roundTime
  });

const mapDispatchToProps = dispatch => ({
    onRoundStart: ()=>dispatch(onRoundStart()),
    onGameOver: ()=>dispatch(onGameOver()),
    onGameEnd: ()=>dispatch(onGameEnd())
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundBreakdown);