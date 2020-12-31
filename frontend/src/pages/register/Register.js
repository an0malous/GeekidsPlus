import React from 'react';
import { useHistory } from 'react-router';
import api from '../../api';
import useInput from '../../custom-hooks/use-Input';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/userActions';

const Register = () => {
	let history = useHistory();
	const {inputs, handleInputChange, handleSubmit } = useInput(
		
		async function () {
			if (inputs.password && inputs.username) {
				try {
					const { username, password } = inputs;
					const payload = { username, password};
					const response = await api.register(payload);
					
					if (!response.data.errmsg) {
						console.log('successful signup');
						const respone = await api.login(payload)
						getCurrentUser({ loggedIn: true, username, role: 2 });
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
		console.log(inputs)
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
						name="password-confirmation"
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

const mapDispatchToProps = (dispatch) => ({
	getCurrentUser: (user) => dispatch(getCurrentUser(user)),
});


export default connect(null, mapDispatchToProps)(Register);