import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react'
import { onRoundStart } from '../../actions/phonicsGameActions';
const RoundBreakdown = ({ onRoundStart, currentElapsedTime, roundPoints, totalGamePoints }) => (
    <div >
    <div style={{position: "absolute", left: "0", top: "0", width: "100%", height: "100vh", background: "rgba(0, 0, 0, 0.9)", zIndex: "2"}}> </div>
        <Container style={{position: "relative", zIndex: "4", color: "white"}}>
            <Grid>
                <Grid.Column centered>
                    <Grid.Row>
                        Congratulations you finished in {currentElapsedTime} seconds
                    </Grid.Row>
                    <Grid.Row>
                        You received {roundPoints} this Round
                    </Grid.Row>
                    <Grid.Row>
                        You now have {totalGamePoints} this game
                    </Grid.Row>
                    <Grid.Row>
                        Keep it up! <button onClick={()=>onRoundStart()}>Next Round</button>
                    </Grid.Row>                       
                </Grid.Column>
            </Grid>
        </Container>
        </div>
);

const mapStateToProps = state => ({
    roundPoints: state.phonicsGameReducer.roundPoints,
    totalGamePoints: state.phonicsGameReducer.totalGamePoints,
    currentElapsedTime: state.phonicsGameReducer.roundTime
  });

const mapDispatchToProps = dispatch => ({
    onRoundStart: ()=>dispatch(onRoundStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundBreakdown);