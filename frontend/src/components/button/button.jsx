import React, { Fragment } from 'react';

const Button = ({ icon: Icon , label}, ...rest) => {
    
    return ( 
        <Fragment>
            {
                Icon ? (<Icon {...rest} />) //font awesome icons and the like

                : 
                
                (<button {...rest}>{label}</button>)
            }
        </Fragment>
    )
};

export default Button;