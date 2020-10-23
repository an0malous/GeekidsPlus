import React, { Fragment } from 'react';

const Button = ({ Icon, label}, ...rest) => {
    
    return ( 
        <Fragment>
            {
                icon ? (<Icon {...rest} />) //font awesome icons and the like

                : 
                
                (<button {...rest}>{label}</button>)
            }
        </Fragment>
    )
};

export default Button;