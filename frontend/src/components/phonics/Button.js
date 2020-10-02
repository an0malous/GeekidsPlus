import React from 'react';

export const Button = (props) => {
   return (
       <div>
            <button className="ui button" onClick={props.handler}>{props.label}</button>
       </div>
   )
}