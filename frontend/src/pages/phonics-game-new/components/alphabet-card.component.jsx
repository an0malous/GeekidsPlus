import React from 'react';

const AlphabetCard = ({ letter, ...rest}) => {

    return (
        <div style={{padding: "20px", border: "1px solid black", borderRadius: "15%", backgroundColor: "white"}} {...rest}>
            {letter}
        </div>
    );
};

export default AlphabetCard;