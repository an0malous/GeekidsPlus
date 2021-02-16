import React from 'react';
import { Container } from 'semantic-ui-react';
import PhonicsGame from './phonics-game.component';
import PhonicsGameStartMenu from './phonics-game-start-menu.component';
import { connect } from 'react-redux';


const PhonicsGameContainer = ({ currentWords }) => {
 
   
    return (
        <Container>
            {
                currentWords.length > 0 ? <PhonicsGame /> : <PhonicsGameStartMenu />
            }
        </Container>
    )
};

const mapStateToProps = state => ({
    currentWords: state.phonicsGameReducer.currentWords,
});


export default connect(mapStateToProps)(PhonicsGameContainer);