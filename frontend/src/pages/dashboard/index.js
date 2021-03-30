import React, { useState } from 'react';
import Practice from './components/practice'
import LanguageToggle from '../../components/language-display-container/language-toggle'
import {
	Menu,
	Segment,
	Container
} from 'semantic-ui-react';
import Songs from './components/songs';

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
					<LanguageToggle EngContent={()=>"updates"} JpContent={()=><div>Updates<div style={{fontSize: "0.58rem"}}>アップデート</div></div>}　/>
				</Menu.Item>
				<Menu.Item
					name="songs"
					active={activeItem === 'songs'}
					onClick={handleItemClick}
				><LanguageToggle EngContent={()=>'Songs'} JpContent={()=><div>Songs<div style={{fontSize: "0.58rem"}}>ソング</div></div>} />
				</Menu.Item>
				<Menu.Item
					name="sounds"
					active={activeItem === 'sounds'}
					onClick={handleItemClick}
				>ABCs</Menu.Item>
			</Menu>
			<Segment attached="bottom">
				{activeItem === 'updates' ? (
					'This is all the updates'
				) : (null)}
				{activeItem === 'sounds' ? <Practice /> : null}
				{activeItem === 'songs' ? <Songs /> : null}
			</Segment>
		</Container>
	);
};
export default Home;
