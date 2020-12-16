import React from 'react';
import { useHistory } from 'react-router';
import api from '../../api';
import useInput from '../../custom-hooks/use-Input';

const Register = () => {
	let history = useHistory();
	const {inputs, handleInputChange, handleSubmit } = useInput(
		async function () {
			if (inputs.password && inputs.username) {
				try {
					const { username, password } = inputs;
					const payload = { username, password };
					const response = await api.register(payload);

					if (!response.data.errmsg) {
						console.log('successful signup');
						history.push("/");
					} else {
						console.log('username already taken');
					}
				} catch (error) {
					console.log('signup error: ');
					console.log(error);
				}
			}
		}
	);
	console.log(history)
	return (
		<div>
			<form className="ui form">
				<div className="field">
					<label>Username</label>
					<input
						onChange={handleInputChange}
						value={inputs.username}
						type="text"
						name="username"
						placeholder="username"
					/>
				</div>
				<div className="field">
					<label>Password</label>
					<input
						onChange={handleInputChange}
						value={inputs.password}
						type="password"
						name="password"
						placeholder="password"
					/>
				</div>
				<div className="field">
					<label>Confirm password</label>
					<input
						onChange={handleInputChange}
						value={inputs.confirmPassword}
						type="password"
						name="last-name"
						placeholder="confirmation password"
					/>
				</div>
				<button
					className="ui button"
					type="submit"
					onClick={handleSubmit}
				>
					Sign up
				</button>
			</form>
		</div>
	);
};

export default Register;