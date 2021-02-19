import React, { useRef, useEffect } from 'react';

const Dropzone = ({ letter, handleDropzones, ...rest}) => {
    const ref= useRef(null)

    useEffect(()=>{
        
        handleDropzones(ref)
    }, [handleDropzones])
    return (
        <div ref={ref}{...rest}>{letter}</div>
    );
};

export default Dropzone;