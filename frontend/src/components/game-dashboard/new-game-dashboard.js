import React from 'react';
import { connect } from 'react-redux';

import { Grid, Segment, Rail, Button, Container } from 'semantic-ui-react';
import Thumbnail from '../thumbnail/thumbnail.component';
const GameDashboard = ({ currentWords, currentDeckIndex, points }) => {
    const currentWord = currentWords[currentDeckIndex];
    return (
        currentWords ?
        (
           
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