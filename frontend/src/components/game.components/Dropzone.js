import React from 'react';

export const Dropzone = (props) => {
  
    return (
        <div style={{height: "210px"}}className="ui grid center aligned container">
            {props.dropzoneWord.map(zone=><div style={{width: "200px", height: "200px", background: "black"}}className="dropzone inner-dropzone" key={zone}>{zone}</div>)}
        </div>
         
       
    )
}