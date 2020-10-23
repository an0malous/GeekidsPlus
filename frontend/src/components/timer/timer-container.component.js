import React, {  useState, useEffect  } from 'react';

const Timer = ({ initialClock = 0, countDown }) => {
    const [totalSeconds, setTotalSeconds] = useState(0);

    const tick = () => {
        countDown ? setSeconds(seconds - 1)
        : setSeconds(seconds + 1)
    };

    useEffect(()=>{
        setTotalSeconds(totalSeconds = initialClock)
        setTimeout(tick, 1000);
    }, 
    [initialClock]);

    const seconds = totalSeconds % 60;
    const minutes = parseInt(totalSeconds / 60);

    return (
        <div>{`${minutes} : ${seconds}`}</div>    
    );
};

export default Timer;
