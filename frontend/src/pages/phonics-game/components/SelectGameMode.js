import React from 'react';

export function SelectGameMode(props) {
    console.log("INSIDE GAMEMODE", props.gameLevel)
    if(props.gameLevel === "initSounds"){
        return props.init("random")          
    }

    return (
       
        <div>
 
        {props.gameLevel === 'cvc' || props.gameLevel === 'cvcAdd' ?
            (<select id="letter-selection">
                <option value="" disabled default>Letter</option>
                <option value="random" >Random</option> 
                <option value="a" >short a</option>
                <option value="e">short e</option>
                <option value="i">short i</option>
                <option value="o">short o</option>
                <option value="u">short u</option>
            </select>) : (
                <select id="letter-selection">
                <option value="" disabled default>Letter</option> 
                <option value="ch" >ch</option>
                <option value="ck">ck</option>
                <option value="th">th</option>
                <option value="wh">wh</option>
                <option value="sh">sh</option>
            </select>
           
            )}
            
            <button onClick={()=>props.init(document.querySelector('#letter-selection').value)}>Start Game</button>
        </div>
    )

}