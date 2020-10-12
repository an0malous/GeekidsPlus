import React from 'react';
import { Link } from 'react-router-dom';

export function SelectGameMode(props) {
    console.log("INSIDE GAMEMODE", props.gameLevel)
    if(props.gameLevel === "initSounds"){
        return props.init("random")          
    }
    if(props.gameType === 'competitive'){
        return (
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh"}}>
                <div>
                    <Link onClick={()=>props.init('classic')} to="/phonics/play/competitive/classic">Classic</Link>
                </div>
                <div>
                    <Link onClick={()=>props.init('marathon')} to="/phonics/play/competitive/marathon">Marathon</Link>
                </div>
            </div>
        )
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
            
            <Link to="/phonics/play" onClick={()=>props.init(document.querySelector('#letter-selection').value)}>Start Game</Link>
        </div>
    )

}