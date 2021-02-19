import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import Thumbnail from '../thumbnail/thumbnail.component';

const GameDashboard = ({ currentWords, onGameEndHandler, currentDeckIndex, totalGamePoints, time, helpHandler }) => {
    const currentWord = currentWords[currentDeckIndex];
    return (
        currentWords ?
        (
        
        <Grid columns={3}>
            <Grid.Row>
                <Grid.Column centered="true" width={5} style={{ backgroundColor: "orange"}}>
                    <div>Points: {totalGamePoints}</div>
                    <div>{`Time: ${parseInt(time / 60)} : ${time % 60}`}</div>
                    <div>{`${currentDeckIndex + 1} / ${currentWords.length}`}</div>
                </Grid.Column> 

                <Grid.Column width={6} style={{ textAlign: "center"}}>
                    <Thumbnail src={require (`../../asssets/words${currentWord.img}`)} width="250" height="200" />
                </Grid.Column>
                
                <Grid.Column width={5} style={{ backgroundColor: "orange"}}>
                    <Button label="Pause"/>
                    <Button onClick={onGameEndHandler} label="New Game"/>
                    <Button label="Listen" />
                    <Button label="Help" onClick={helpHandler} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
       
        ): ("Loading Dashboard...")
        );
};

export default GameDashboard;
