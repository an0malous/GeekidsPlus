import React from 'react';

export const Thumbnail = (props) => {
    console.log(props.source)

    if(props.inlarge){
        return <div width={props.inlargedWidth} height={props.inlargedHeight} className="ui container thumbnail-inlarged" onClick={props.handler}>inlarged Rendered</div>
    }
    return (
        <div className="ui container" style={{width: props.standardWidth, height: props.standardHeight, overflow: "hidden" }} onClick={props.handler}>
            <img width="100%" src={props.source} />
        </div>
    )
}
