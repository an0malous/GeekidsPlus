import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Rail, Button, Container } from 'semantic-ui-react';
import Thumbnail from '../thumbnail/thumbnail.component';
import { startTimerAsync, onGameEnd, stopTimer1 } from '../../actions/phonicsGameActions';

const GameDashboard = ({ currentWords, onGameEnd, currentDeckIndex, totalGamePoints, time, stopTimer1, startTimerAsync }) => {
    const currentWord = currentWords[currentDeckIndex];

    useEffect(()=>{
        startTimerAsync();
        return ()=> stopTimer1()
    }, [currentDeckIndex])

    return (
        currentWords ?
        (
        
        <Grid columns={3}>
            <Grid.Row>
                <Grid.Column centered width={5} style={{ backgroundColor: "orange"}}>
                    <div>Points: {totalGamePoints}</div>
                    <div>{`Time: ${parseInt(time / 60)} : ${time % 60}`}</div>
                    <div>{`${currentDeckIndex + 1} / ${currentWords.length}`}</div>
                </Grid.Column> 

                <Grid.Column width={6} style={{ textAlign: "center"}}>
                    <Thumbnail src={require (`../../asssets/words/${currentWord.img}`)} width="250" height="200" />
                </Grid.Column>
                
                <Grid.Column width={5} style={{ backgroundColor: "orange"}}>
                    <Button label="Pause"/>
                    <Button onClick={onGameEnd} label="New Game"/>
                    <Button label="Listen" />
                    <Button label="Help" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
       
        ): ("Loading Dashboard...")
        );
};

const mapDispatchToProps = dispatch => ({
    startTimerAsync: ()=>dispatch(startTimerAsync()),
    onGameEnd: ()=>dispatch(onGameEnd()),
    stopTimer1: ()=>(dispatch(stopTimer1()))
});

const mapStateToProps = state => ({
    currentDeckIndex: state.phonicsGameReducer.currentDeckIndex,
    currentWords: state.phonicsGameReducer.currentWords,
    totalGamePoints: state.phonicsGameReducer.totalGamePoints,
    time: state.phonicsGameReducer.totalGameTime
});

export default connect(mapStateToProps, mapDispatchToProps)(GameDashboard);
