import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { shuffle } from '../../../utils';
import './interact-draggable-config';
import AlphabetCard from './alphabet-card.component';
import { Grid, Container } from 'semantic-ui-react';
const AlphabetContainer = ({ currentWords, currentDeckIndex }) => {
    const [alphabet, setAlphabet] = useState([])

    const currentWord = currentWords[currentDeckIndex]
    
    useEffect(()=>{
        
        if(currentWord.type === "blends"){
            setAlphabet(alphabet.push(currentWord.letter));
        };

        setAlphabet(shuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ,'k' , 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u' , 'v', 'w', 'x', 'y', 'z']));
        console.log("ALPHABET CARDS RELOADED")
            return function alphabetCardCleanUp () {
                console.log("CLEANING UP")
        setAlphabet([])
        console.log(alphabet)
      }
    }, [currentDeckIndex])
   
  
  
    return (
      
        <Grid>
       
            <Grid.Row centered>
           
            {
                alphabet.length > 2 ? alphabet.map((cardLetter, i) => <AlphabetCard key={cardLetter} letter={cardLetter} className="draggable" />) : "Loading Alphabet Cards..."
                
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