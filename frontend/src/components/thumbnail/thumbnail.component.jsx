import React, { useState } from 'react';

const Thumbnail = ({ src, alt, width, height }, ...rest) => {

    const [inlarge, setInlarge] = useState(false);

    const handleSetInlarge = () => {
        setInlarge(!inlarge);
    };

    return (
        <div onClick={handleSetInlarge}>
            {
                inlarge ? (<img src={src} alt={alt} width="100%" height="100%" {...rest} />)
                : (<img src={src} alt={alt} width={width} height={height} {...rest} />)
            }
        </div>
    );
};

export default Thumbnail;