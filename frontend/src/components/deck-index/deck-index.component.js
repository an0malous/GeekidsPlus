import React from 'react';
import { connect } from 'react-redux';
const DeckIndex = ({ currentDeckIndex, currentDeckLength }) => {


    return (
        <div>{currentDeckIndex}/{currentDeckLength}</div>
    );
};

const mapStateToProps = state => {
    return { 
        currentDeckIndex: state.phonicsGameReducer.currentDeckIndex,
        currentDeckLength: state.phonicsGameReducer.currentWords.length
    };
};

export default connect(mapStateToProps)(DeckIndex);