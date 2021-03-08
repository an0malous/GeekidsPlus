import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react'
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