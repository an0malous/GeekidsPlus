import React from 'react';

export function SelectGameMode(props) {
    return (
        <div>
        {props.gameLevel === "cvc" || "cvcAdd" ?
            (<select id="letter-selection">
                <option value="" disabled selected>Letter</option>
                <option value="random" >Random</option> 
                <option value="a" >short a</option>
                <option value="e">short e</option>
                <option value="i">short i</option>
                <option value="o">short o</option>
                <option value="u">short u</option>
            </select>) : (
                <select>
                <option value="" disabled selected>Letter</option> 
                <option value="ch" >ch</option>
                <option value="ck">ck</option>
                <option value="th">th</option>
                <option value="wh">wh</option>
                <option value="sh">sh</option>
            </select>
            )
        </div>
    )
}