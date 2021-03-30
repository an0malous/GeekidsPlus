import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { onToggleClick } from '../../actions/languageDisplayActions';
import { connect } from 'react-redux';
import LanguageToggle from '../language-display-container/language-toggle';
import translationSvg from '../../asssets/img/translation.svg'


const Navbar = ({ onToggleClick }) => {
	const [activeItem, setActiveItem] = useState('home');
	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<Menu color="black">
			<Menu.Item
				as={Link}
				to={"/dashboard"}
				name="dashboard"
				active={activeItem === 'dashboard'}
				onClick={handleItemClick}
			>
				<LanguageToggle JpContent={()=><div>Dashboard<div style={{fontSize: "0.58rem"}}>ダッシュボード</div></div>} EngContent={()=>'Dashboard'} />
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
				to={"/spelling"}
				name="spelling"
				active={activeItem === 'spelling'}
				onClick={handleItemClick}
			>
				<LanguageToggle JpContent={()=><div>Spelling<div style={{fontSize: "0.55rem"}}>つづり</div></div>} EngContent={()=>'Spelling'} />
			</Menu.Item>
			
			<Menu.Item className="borderless" position="right" >
				<img onClick={onToggleClick} alt="Japanese/English toggle button" src={translationSvg} />
			</Menu.Item>
			
		</Menu>
	);
};

export default connect(null, { onToggleClick })(Navbar);
