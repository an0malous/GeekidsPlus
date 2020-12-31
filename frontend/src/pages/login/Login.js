import React, { useState } from 'react';
import api from '../../api';
import { getCurrentUser } from '../../actions/userActions';
import { Button, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import useInput from '../../custom-hooks/use-Input';
import { useHistory } from 'react-router';

const Login = ({ getCurrentUser }) => {
	let history = useHistory();
	const [open, setOpen] = useState(false);
	const { inputs, handleInputChange, handleSubmit } = useInput(
		async (event) => {
			if (inputs.username && inputs.password) {
				try {
					const payload = {
						username: inputs.username,
						password: inputs.password,
					};
					const response = await api.login(payload);
					const { username, role } = response.data;

					if ((username, role)) {
						getCurrentUser({ loggedIn: true, username, role });
						history.push('/dashboard');
					} else {
						console.log('No username or password');
					}
				} catch (err) {
					console.log(err);
				}
			} else {
				console.log('No username or password');
			}
		}
	);

	return (
		<Modal
			centered={false}
			open={open}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			trigger={
				<Button  color="black" size="big">
					Login
				</Button>
			}
		>
			<Modal.Header>Login</Modal.Header>
			<Modal.Content>
				<form className="ui form">
					<div className="field">
						<label>Username</label>
						<input
							onChange={handleInputChange}
							type="text"
							name="username"
							value={inputs.username}
							placeholder="username"
						/>
					</div>
					<div className="field">
						<label>Password</label>
						<input
							onChange={handleInputChange}
							type="password"
							value={inputs.password}
							name="password"
							placeholder="password"
						/>
					</div>
					<Button
					color="green"
					onClick={(e) => {
						handleSubmit(e);
						setOpen(false);
					}}
				>
					Sign-in
				</Button>
				</form>
			</Modal.Content>
			<Modal.Actions>
				
				<Button primary>Register</Button>
				<Button color="red">Forgot Password?</Button>
				
			</Modal.Actions>
		</Modal>
	);
};

const mapDispatchToProps = (dispatch) => ({
	getCurrentUser: (user) => dispatch(getCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
