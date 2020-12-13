import React, { useState } from 'react';


const useInput = postData => {
	const [inputs, setInputs] = useState({});
	const handleSubmit = (event) => {
		if (event) {
         event.preventDefault();
			postData()
		}	
	};

	const handleInputChange = (event) => {
		event.persist();
		setInputs((inputs) => ({
			...inputs,
			[event.target.name]: event.target.value,
		}));
	}
	return { handleSubmit, handleInputChange, inputs, setInputs };
	
};

export default useInput;
