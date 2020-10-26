import React from 'react';
import './interact-dropzone-config';
import Dropzone from './dropzone.component';

import { connect } from 'react-redux';

const DropzoneContainer = ({ currentWord }) => {
    
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

    const dropzones = currentWord ? createDropzone(currentWord) : null
        
    return (
        <div style={{display: "flex"}}>
            {
               currentWord ? (dropzones.map(zone => <Dropzone key={zone} letter={zone} style={{color: "red", fontSize: "1.5rem"}} className="inner-dropzone" />))
               : ("Loading Words...")
            }
        </div>
    );
};

const mapStateToProps = state => {
    return { 
        currentWord: state.phonicsGameReducer.currentWord 
    };
};

export default connect(mapStateToProps)(DropzoneContainer);