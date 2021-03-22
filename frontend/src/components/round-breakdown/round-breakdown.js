
import { connect } from 'react-redux';

import { onRoundStart } from '../../actions/phonicsGameActions';
const RoundBreakdown = (props) => {
    console.log(props)
            return props.render(props)
}
   


const mapStateToProps = state => ({
    roundPoints: state.phonicsGameReducer.roundPoints,
    totalGamePoints: state.phonicsGameReducer.totalGamePoints,
    currentElapsedTime: state.phonicsGameReducer.roundTime
  });

const mapDispatchToProps = dispatch => ({
    onRoundStart: ()=>dispatch(onRoundStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundBreakdown);