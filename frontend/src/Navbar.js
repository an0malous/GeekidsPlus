import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import api from './api';
import { useHistory } from 'react-router';
import { getCurrentUser } from './actions/userActions';

const Navbar = ({ user, getCurrentUser }) => {
	const [activeItem, setActiveItem] = useState('');
	const handleItemClick = (e, { name }) => setActiveItem(name);

	let history = useHistory();

	async function logout () {
		const res = await api.logout();
		getCurrentUser({username: null })
	};

	return (
		<Menu>
			<Menu.Item
				as={Link}
				to={user.loggedIn ? "/dashboard" : "/"}
				name="home"
				active={activeItem === 'home'}
			>
				Home
			</Menu.Item>

			<Menu.Item
				as={Link}
				to="/flashcards"
				name="flashCards"
				active={activeItem === 'flashCards'}
				onClick={handleItemClick}
			>
				Flashcards
			</Menu.Item>

			<Menu.Item
				as={Link}
				to="/phonics"
				name="phonics"
				active={activeItem === 'phonics'}
				onClick={handleItemClick}
			>
				Phonics
			</Menu.Item>
			{user.loggedIn ? (
				<Fragment>
				<Menu.Item onClick={logout} position="right" name="username">
					{`Welcome back ${user.username}`}
				</Menu.Item>
			
				<Menu.Item onClick={logout}>
				Logout
				</Menu.Item>
				</Fragment>
			) : (
				<Menu.Item position="right" name="Login" as={Link}
				to="/login" active={activeItem === 'login'}></Menu.Item>
			)}
		</Menu>
	);
};

const mapStateToProps = (state) => ({
	user: state.userReducer.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	getCurrentUser: (user) => dispatch(getCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
