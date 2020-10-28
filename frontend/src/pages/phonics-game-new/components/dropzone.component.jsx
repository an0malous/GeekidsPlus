import React from 'react';
import { Grid } from 'semantic-ui-react'

const Dropzone = ({ letter, ...rest}) => {
    return (
        <div {...rest}>{letter}</div>
    );
};

export default Dropzone;