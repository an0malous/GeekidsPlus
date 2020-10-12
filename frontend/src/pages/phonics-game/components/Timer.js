import React from 'react';

export default function Timer (props){
   
    return (
        <div>{parseInt(props.totalSeconds / 60)}:{props.totalSeconds % 60}</div>
    )

}