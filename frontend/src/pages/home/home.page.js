import React, { useState, useEffect } from 'react';
import {
	Menu,
	Segment,
	Container
} from 'semantic-ui-react';
import Cirriculum from './cirriculum.component';

const Home = () => {
	const [activeItem, setActiveItem] = useState('updates');

	const handleItemClick = (e, { name }) => setActiveItem(name);
   
	return (
		<Container>
			<Menu attached="top" tabular>
				<Menu.Item
					name="updates"
					active={activeItem === 'updates'}
					onClick={handleItemClick}
				>
					Updates
				</Menu.Item>
				<Menu.Item
					name="cirriculum"
					active={activeItem === 'cirriculum'}
					onClick={handleItemClick}
				></Menu.Item>
			</Menu>
			<Segment attached="bottom">
				{activeItem === 'updates' ? (
					'This is all the updates'
				) : (
					<Cirriculum />
				)}
			</Segment>
		</Container>
	);
};
export default Home;
