import React from 'react';
import { connect } from 'react-redux';
const DeckIndex = ({ currentDeckIndex, currentDeckLength }) => {

    return (
        <div>{currentDeckIndex}/{currentDeckLength}</div>
    );
};

export default DeckIndex;