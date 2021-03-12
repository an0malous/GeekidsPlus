import React from 'react';
import interact from 'interactjs'

const Dropzone = ({ letter, ...rest }) => {


console.log(letter)

    return (
        <div {...rest}>{letter}</div>
    );
};

export default Dropzone;