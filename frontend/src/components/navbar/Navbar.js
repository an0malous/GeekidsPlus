import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { onToggleClick } from '../../actions/languageDisplayActions';
import { connect } from 'react-redux';
import LanguageToggle from '../language-display-container/language-toggle';
import translationSvg from '../../asssets/img/translation.svg'
const Navbar = ({ onToggleClick }) => {
	const [activeItem, setActiveItem] = useState('');
	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<Menu>
			<Menu.Item
				as={Link}
				to={"/home"}
				name="home"
				active={activeItem === 'home'}
			>
				<LanguageToggle JpContent={()=><div>Home<div style={{fontSize: "0.58rem"}}>ホーム</div></div>} EngContent={()=>'Home'} />
			</Menu.Item>

			<Menu.Item
				as={Link}
				to="/phonics"
				name="phonics"
				active={activeItem === 'phonics'}
				onClick={handleItemClick}
			>
				<LanguageToggle JpContent={()=><div>Phonics<div style={{fontSize: "0.58rem"}}>フォニックス</div></div>} EngContent={()=>'Phonics'} />
			</Menu.Item>
			<Menu.Item
				as={Link}
				to={"/geekidstv"}
				name="geekidstv"
				active={activeItem === 'geekidstv'}
			>
				<LanguageToggle JpContent={()=><div>Geekids TV<div style={{fontSize: "0.58rem"}}>ギーキッズテレビ</div></div>} EngContent={()=>'Geekids TV'} />
			</Menu.Item>
			
			<Menu.Item>
				<img onClick={onToggleClick} alt="Japanese/English toggle button" src={translationSvg} />
			</Menu.Item>
		</Menu>
	);
};

export default connect(null, { onToggleClick })(Navbar);
