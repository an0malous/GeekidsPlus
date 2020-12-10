import React, { useState } from 'react';


const useInput = (fetchData, location) => {
	const [inputs, setInputs] = useState({});
	const handleSubmit = (event) => {
		if (event) {
         event.preventDefault();
         fetchData()
         
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
