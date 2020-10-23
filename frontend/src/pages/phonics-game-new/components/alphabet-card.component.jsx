import React from 'react';

const AlphabetCard = ({ letter}, ...rest) => {

    return (
        <div {...rest}>
            {letter}
        </div>
    );
};

export default AlphabetCard;