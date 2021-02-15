import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
	const [activeItem, setActiveItem] = useState('');
	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<Menu>
			<Menu.Item
				as={Link}
				to={"/"}
				name="home"
				active={activeItem === 'home'}
			>
				Home
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
		</Menu>
	);
};

export default Navbar;
