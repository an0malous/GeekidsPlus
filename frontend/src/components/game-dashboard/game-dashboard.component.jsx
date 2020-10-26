import React from 'react';

import { connect } from 'react-redux';

import Thumbnail from '../thumbnail/thumbnail.component';
import Timer from '../timer/timer.component';
import DeckIndex from '../deck-index/deck-index.component';
import Button from '../button/button';
import Points from '../points/points.component';

const GameDashboard = ({ currentWords, currentDeckIndex, currentWord }) => {
    
return (
    <div>
        <h1>Game Dashboard</h1>
        <div className="left">
            <Timer />
            <Points />
            <DeckIndex currentDeckIndex={currentDeckIndex} currentDeckLength={currentWords.length}/>
        </div>
        <div className="thumbnail">
            <Thumbnail src={currentWord.img} width="150" height="100" />
        </div>
        <div className="right">
            <Button label="pause" />
            <Button label="help" />
            <Button label="listen" />
        </div>
    </div>
    );
};
const mapStateToProps = state => {
    return { 
        currentDeckIndex: state.phonicsGameReducer.currentDeckIndex,
        currentWords: state.phonicsGameReducer.currentWords,
        currentWord: state.phonicsGameReducer.currentWord
    };
};
export default connect(mapStateToProps)(GameDashboard);