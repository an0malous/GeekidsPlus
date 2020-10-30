import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { shuffle } from '../../../utils';
import './interact-draggable-config';
import AlphabetCard from './alphabet-card.component';
import { Grid, Container } from 'semantic-ui-react';
const AlphabetContainer = ({ currentWords, currentDeckIndex }) => {
    const currentWord = currentWords[currentDeckIndex]
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ,'k' , 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u' , 'v', 'w', 'x', 'y', 'z'];
    if(currentWord.type === "blends"){
        alphabet.push(currentWord.letter);
    };
    shuffle(alphabet);

    return (
      
        <Grid>
       
            <Grid.Row centered>
           
            {
                alphabet.map(cardLetter => <AlphabetCard key={cardLetter} letter={cardLetter} className="draggable" />)
            }
           
            </Grid.Row>
           
        </Grid>
        
    );
};

const mapStateToProps = state => {
    const { currentWord } = state.phonicsGameReducer;
    return  { 
                currentWords: state.phonicsGameReducer.currentWords,
                currentDeckIndex: state.phonicsGameReducer.currentDeckIndex

            }
}

export default connect(mapStateToProps)(AlphabetContainer);