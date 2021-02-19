import React, { useRef, useEffect } from 'react';

const Dropzone = ({ letter, handleDropzones, ...rest}) => {
    const ref= useRef(null)

    useEffect(()=>{
        console.log(ref.current)
        handleDropzones(ref)
    },[ref.current])
    return (
        <div ref={ref}{...rest}>{letter}</div>
    );
};

export default Dropzone;