import React from 'react';

const AlphabetCard = ({ letter, key }) => {

    return (
        <div key={key}>
            {letter}
        </div>
    );
};

export default AlphabetCard;