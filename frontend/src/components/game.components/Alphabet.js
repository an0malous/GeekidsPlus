import React from 'react';



export const Alphabet = (props) => {
    return (
        <div className="ui grid container alphabet">
            {props.alphabet.map(letter=><div style={{background: "white", width: "70px", height: "70px", color: "black", fontSize: "2rem"}} className="ui item draggable" key={letter}>{letter}</div>)}              
        </div>
    )
            
}