import React from 'react';

export const Alphabet = (props) => {
    {console.log("The ALPHABET: " + props.alphabet)}
    return (
        <div className="ui grid container">
            {props.alphabet.length > 0 ? (props.alphabet.map(letter=>
                <div style={{background: "white", width: "70px", height: "70px", color: "black", fontSize: "2rem"}} className="ui item draggable" key={letter}>{String.fromCharCode(letter)}</div>
            )) : (null)}
        </div>
    )      
}