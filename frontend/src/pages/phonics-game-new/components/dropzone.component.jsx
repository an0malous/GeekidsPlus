import React from 'react';

const Dropzone = ({ letter }, ...rest) => {
    return (
        <div {...rest}>{letter}</div>
    );
};

export default Dropzone;