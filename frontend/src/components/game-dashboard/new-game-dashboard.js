import React from 'react';
import { connect } from 'react-redux';
import { Grid, Rail, Button, Container } from 'semantic-ui-react';
import Thumbnail from '../thumbnail/thumbnail.component';
const GameDashboard = ({ currentWords, currentDeckIndex, points }) => {
    const currentWord = currentWords[currentDeckIndex];
    return (
        currentWords ?
        (
        
        <Grid columns={3}>
            <Grid.Row>
                <Grid.Column centered width={5} style={{ backgroundColor: "orange"}}>
<div>{`Points: ${points}`}</div>
<div>{`Time: ${time}`}</div>
<div>{`${currentDeckIndex} / ${currentWords.length}`}</div>

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
const mapStateToProps = state => {
    return { 
        currentDeckIndex: state.phonicsGameReducer.currentDeckIndex,
        currentWords: state.phonicsGameReducer.currentWords,
        points: state.phonicsGameReducer.currentPoints
    };
};
export default connect(mapStateToProps)(GameDashboard);
