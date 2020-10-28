import React, {  useState, useEffect  } from 'react';

const Timer = ({prevElapsedTime, stop, countDown = false }) => {
  
    const [roundTime, setRoundTime] = useState(0);

    useEffect(()=>{
        const tickInterval = setInterval(tick, 1000);
        
    },[])
  
    const tick = () => {
      setRoundTime(prevState => prevState + 1)
    };

    const stop = () => {
        clearInterval(tickInterval);
        getRoundTime(roundTime);
    }

    const seconds = roundTime + prevElapsedTime % 60;
    const minutes = parseInt(roundTime + prevElapsedTime / 60);

    return (
        <div>
        {`${minutes} : ${seconds}`}</div>    
    );
};

export default Timer;
