import React, { useState } from 'react';

const useInput = (cb) => {
	const [inputs, setInputs] = useState({});
	const handleSubmit = (event) => {
		if (event) {
         event.preventDefault();
         cb()
		}
		
	};

	const handleInputChange = (event) => {
		event.persist();
		setInputs((inputs) => ({
			...inputs,
			[event.target.name]: event.target.value,
		}));
	}
	return { handleSubmit, handleInputChange, inputs };
	
};

export default useInput;
