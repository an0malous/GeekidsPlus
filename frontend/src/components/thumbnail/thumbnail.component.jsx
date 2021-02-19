import React, { useState } from 'react';
import { Modal } from 'semantic-ui-react';

const Thumbnail = ({ src, alt, width, height }, ...rest) => {

    const [open, setOpen] = useState(false);

    return (
        
<Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<img src={src} alt={alt} width={width} height={height} />}
    >
      <Modal.Content>
      <img src={src} alt={alt} width="100%" height="100%" />
      </Modal.Content>
    </Modal>
                
    
    );
};

export default Thumbnail;