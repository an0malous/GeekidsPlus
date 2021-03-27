import React, {useEffect, useRef, useState} from 'react';
import { useSpring, animated } from 'react-spring'
import Thumbnail from '../../../../components/thumbnail/thumbnail.component'
const abcStyles ={width: "55px", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", fontSize:"2.5rem", height: "55px", border: "1px solid black", color: "red", borderRadius: "15%", backgroundColor: "white"}
const AlphabetCard = ({ letter, currentDeckIndex, ...rest}) => {
    const letterCardRef = useRef(null);
    const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
    useEffect(()=>{
        const card = letterCardRef.current;
       
            
            card.style.transform = 'translate(' + 0 + 'px, ' + 0 + 'px)' 
            card.setAttribute('data-x', 0) 
            card.setAttribute('data-y', 0)
            card.classList.add('draggable')
            
    }, [currentDeckIndex])
   
    return (
        <div onClick={() => set(state => !state)} ref={letterCardRef} style={{width: "55px", height: "55px"}} {...rest}>
          
            <animated.div style={ {...abcStyles, city: opacity.interpolate(o => 1 - o), transform}}>{letter}</animated.div>
            <animated.div style={{...abcStyles, opacity, overflow: "hidden", transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>{flipped ? <Thumbnail width="100%" src={require(`../../../../asssets/abcs/${letter}.jpg`)} /> : null }</animated.div>
        </div>
    );
};

export default AlphabetCard;