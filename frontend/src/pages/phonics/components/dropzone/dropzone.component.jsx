import React from 'react';

const Dropzone = ({ letter, ...rest }) => {

console.log(letter)

    return (
        <div {...rest}>{letter}</div>
    );
};

export default Dropzone;