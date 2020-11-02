import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Rail, Button, Container } from 'semantic-ui-react';
import Thumbnail from '../thumbnail/thumbnail.component';
import { startTimerAsync } from '../../actions/phonicsGameActions';
import { stopTimerAsync } from '../../actions/phonicsGameActions';

const GameDashboard = ({ currentWords, currentDeckIndex, points, time, startTimerAsync, stopTimerAsync}) => {
    const currentWord = currentWords[currentDeckIndex];


    useEffect(()=>{
        startTimerAsync();    
    }, [currentDeckIndex])

    return (
        currentWords ?
        (
        
        <Grid columns={3}>
            <Grid.Row>
                <Grid.Column centered width={5} style={{ backgroundColor: "orange"}}>
                    <div>Points: {points}</div>
                    <div>{`Time: ${parseInt(time / 60)} : ${time % 60}`}</div>
                    <div>{`${currentDeckIndex + 1} / ${currentWords.length}`}</div>
                </Grid.Column> 

                <Grid.Column width={6} style={{ textAlign: "center"}}>
                    <Thumbnail src={currentWord.img} width="250" height="200" />
                </Grid.Column>
                
                <Grid.Column width={5} style={{ backgroundColor: "orange"}}>
                    <Button label="pause"/>
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
    stopTimerAsync: ()=>dispatch(stopTimerAsync())
});

const mapStateToProps = state => ({
    currentDeckIndex: state.phonicsGameReducer.currentDeckIndex,
    currentWords: state.phonicsGameReducer.currentWords,
    points: state.phonicsGameReducer.roundPoints,
    time: state.phonicsGameReducer.currentElapsedTime
});

export default connect(mapStateToProps, mapDispatchToProps)(GameDashboard);
