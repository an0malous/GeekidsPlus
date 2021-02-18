import React, {useEffect, useRef} from 'react';

const AlphabetCard = ({ letter, ...rest}) => {
    const letterCardRef = useRef()
    
    useEffect(()=>{
            const card = letterCardRef.current
            card.style.transform = 'translate(' + 0 + 'px, ' + 0 + 'px)' 
            card.setAttribute('data-x', 0) 
            card.setAttribute('data-y', 0)
            card.classList.add('draggable')  
    })
    return (
        <div ref={letterCardRef} style={{padding: "20px", border: "1px solid black", color: "red", borderRadius: "15%", backgroundColor: "white"}} {...rest}>
            {letter}
        </div>
    );
};

export default AlphabetCard;