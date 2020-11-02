import React, { useEffect, useState, useRef } from 'react';

const AlphabetCard = ({ letter, ...rest}) => {

const ref = useRef(null);


useEffect(()=>{
    return ()=> {
        ref.current.style.transform = 'translate(' + 0 + 'px, ' + 0 + 'px)'
        ref.current.setAttribute('data-x', 0)
        ref.current.setAttribute('data-y', 0)
        ref.current.classList.add('draggable')
    }
})

    return (
        <div ref={ref} style={{padding: "20px", border: "1px solid black", borderRadius: "15%", backgroundColor: "white"}} {...rest}>
            {letter}
        </div>
    );
};

export default AlphabetCard;