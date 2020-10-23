import React, { useEffect } from 'react';

import { shuffle } from '../../../utils';

const AlphabetContainer = ({ currentWord }) => {
    const alphabet = [a, b, c, d, e, f, g, h, i, j ,k , l, m, n, o, p, q, r, s, t, u , v, w, x, y, z];

    useEffect(()=>{
        if(currentWord.type === "blends"){
            alphabet.push(currentWord.letter);
        };
        shuffle(alphabet);
    });

    return (
        <div>
            {
                alphabet.map(letter => <AlphabetCard key={letter} letter={letter} />)
            }
        </div>
    );
};

export default AlphabetContainer;