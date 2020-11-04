import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import PhonicsGame from './phonics-game.component';
import PhonicsGameStartMenu from './phonics-game-start-menu.component';
import { connect } from 'react-redux';


const PhonicsGameContainer = ({ fetchSuccessful }) => {
   
    return (
        <Container>
            {
                fetchSuccessful > 1 ? <PhonicsGame /> : <PhonicsGameStartMenu />
            }
        </Container>
    )
};

const mapStateToProps = state => ({
    isFetching: state.phonicsGameReducer.isFetching,
    fetchSuccessful: state.phonicsGameReducer.currentWords,
    openRoundBreakdown: state.phonicsGameReducer.openRoundBreakdown
});


export default connect(mapStateToProps)(PhonicsGameContainer);