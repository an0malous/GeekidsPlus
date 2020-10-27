import React from 'react';

import Dropzone from './dropzone.component';
import Interact from './interact-dropzone-config';
import { connect } from 'react-redux';

const DropzoneContainer = ({ currentWords, currentDeckIndex }) => {
    const currentWord = currentWords[currentDeckIndex];
    const createDropzone = currentWord => {
        const {name, type, letter } = currentWord;
        const blend = [...letter];
        const word = [...name];

        if (type === "blends"){
            
            for(let i = 0; i < word.length; i++){
                if(word[i] === blend[0] && word[i + 1] === blend[1]){
                    return word.splice(i, 2, blend);
                }
            };
        };
        return word;
    };

    const dropzones = currentWords ? createDropzone(currentWord) : null
        
    return (
        <Interact>
            {
               currentWords ? (dropzones.map(zone => <Dropzone key={zone} letter={zone} style={{color: "red", fontSize: "1.5rem", padding: "25px", border: "dotted black 2px"}} className="inner-dropzone" />))
               : ("Loading Words...")
            }
        </Interact>
    );
};

const mapStateToProps = state => {
    return { 
        currentWords: state.phonicsGameReducer.currentWords,
        currentDeckIndex: state.phonicsGameReducer.currentDeckIndex
        };
};

export default connect(mapStateToProps)(DropzoneContainer);