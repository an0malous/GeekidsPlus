import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Navbar = ({ user }) => {
	const [activeItem, setActiveItem] = useState('');
	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<Menu>
			<Menu.Item
				as={Link}
				to="/"
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
				<Menu.Item position="right" name="Logout">
					{`Welcome back ${user.username}`}
				</Menu.Item>
			) : (
				<Menu.Item position="right" name="Login"></Menu.Item>
			)}
		</Menu>
	);
};

const mapStateToProps = (state) => ({
	user: state.userReducer.currentUser,
	foo: state.phonicsGameReducer.currentWords,
});

export default connect(mapStateToProps)(Navbar);
