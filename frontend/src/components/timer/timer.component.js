import React, {  useState, useEffect  } from 'react';

const Timer = ({ initialClock = 0, countDown = false }) => {
    let [totalSeconds, setTotalSeconds] = useState(0);

    const tick = () => {
        countDown ? setTotalSeconds(totalSeconds - 1)
        : setTotalSeconds(totalSeconds + 1)
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
