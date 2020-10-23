import React from 'react';

const Dropzone = ({ key, letter }) => {
    return (
        <div key={key}>{letter}</div>
    );
};

export default Dropzone;