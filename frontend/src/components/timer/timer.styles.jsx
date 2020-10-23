import React from 'react';

const Timer = ({totalSeconds}) => {
    const seconds = totalSeconds % 60;
    const minutes = parseInt(totalSeconds / 60);

    return (
        <div>{`${minutes} : ${seconds}`}</div>    
    );
};

export default Timer;