import React from 'react';
import api from '../../../api';
import { CardForm } from './CardForm';
import useInput from '../../../custom-hooks/use-Input';

const AddCard = () => {
  
    const postData = async event =>{

        const {name, type, letter, img, audio} = inputs;
        if( name, type, letter, img){
            try {
                const payload = {name, type, letter, img, audio}
                const res = await api.createCard(payload);
                console.log(`Post request Sent ${res.data}`);
            } catch (err){
                console.log(`Sorry, the request could not be made. Error: ${err}`);
            }
        }  
    }

    const { inputs, handleInputChange, handleSubmit } = useInput(postData);

        return (
          <CardForm
          btnText="Create Card"
          handleChange={handleInputChange}
          onSubmit={handleSubmit}            
          name={inputs.name}
          type={inputs.type}
          letter={inputs.letter}
          img={inputs.img}
          audio={inputs.audio} />
        )
    
};

export default AddCard;
