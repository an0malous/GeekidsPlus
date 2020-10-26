import React, {  useState, useEffect  } from 'react';

const Timer = ({ initialClock = 0, countDown = false }) => {
  
    const [totalSeconds, setTotalSeconds] = useState(initialClock);
   
    const tick = () => {
      setTotalSeconds(prev => prev + 1)
    };

    useEffect(()=>{
        setInterval(tick, 1000);
    }, 
    [initialClock]);

    let seconds = totalSeconds % 60;
    let minutes = parseInt(totalSeconds / 60);

    return (
       
        <div>
        {`${minutes} : ${seconds}`}</div>    
    );
};

export default Timer;
