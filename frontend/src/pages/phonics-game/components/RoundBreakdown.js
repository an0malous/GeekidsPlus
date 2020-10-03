import React from 'react';

export const RoundBreakdown = (props) => {
    return (
        <div>
        {props.roundPoints}
        <button onClick={props.handleOnNextRound} className="ui button">Next Round</button>
        
        </div>

    )
}