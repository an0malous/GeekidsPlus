import React from 'react';
import api from '../../../api';
import { UserForm } from './UserForm';
import useInput from '../../../custom-hooks/use-Input';

const AddUser = () => {
	const fetch = async (event) => {
		let { username, password, role } = inputs;
		if ((username, password, role)) {
			try {
				const payload = { username, password, role };
				const res = await api.createUser(payload);
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		}
	};
	const { inputs, handleInputChange, handleSubmit } = useInput(fetch);

	return (
		<UserForm
			btnText={'Create User'}
			username={inputs.username}
			password={inputs.password}
			role={inputs.role}
			handleOnChange={handleInputChange}
			onSubmit={handleSubmit}
		/>
	);
};

export default AddUser;
