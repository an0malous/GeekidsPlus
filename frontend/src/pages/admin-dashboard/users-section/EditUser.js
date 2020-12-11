import React, { useEffect } from 'react';
import api from '../../../api';
import { UserForm } from './UserForm';
import { withRouter } from 'react-router';
import { useParams } from 'react-router';
import useInput from '../../../custom-hooks/use-Input';

const EditUser = () => {
	const { editUserId } = useParams();

	const { inputs, setInputs, handleInputChange, handleSubmit } = useInput(
		async (event) => {
			event.preventDefault();
			const { username, password, role } = inputs;
			if ((username, password, role)) {
				try {
					const payload = { username, password, role };
					await api.updateUser(editUserId, payload);
				} catch (err) {
					console.log(err);
				}
			}
		}
	);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await api.editUser(editUserId);
				const { username, password, role } = res.data;
				setInputs({ username, password, role });
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return (
		<UserForm
			btText={'Update User'}
			username={inputs.username}
			password={inputs.password}
			role={inputs.role}
			handleOnChange={handleInputChange}
			onSubmit={handleSubmit}
		/>
	);
};

export default withRouter(EditUser);
