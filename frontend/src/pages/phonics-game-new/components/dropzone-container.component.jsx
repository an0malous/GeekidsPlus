import React, { useEffect } from 'react';
import './interact-dropzone-config';

const DropzoneContainer = ({ currentWord: {name, type, letter} }) => {

    useEffect(()=> {
        if (type === "blends"){
            const blend = [...letter];
            const word = [...name];
            
            for(let i = 0; i < word.length; i++){
                if(word[i] === blend[0] && word[i + 1] === blend[1]){
                    word.splice(i, 2, blend);
                }
            };
        }
    });

    const dropzones = [...currentWord.name];
    return (
        <div>
            {
               dropzones.map(zone => <Dropzone key={zone} letter={zone} className="inner-dropzone"  />) 
            }
        </div>
    );
};

export default DropzoneContainer;