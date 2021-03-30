import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import LanguageToggle from '../../../components/language-display-container/language-toggle'

const friendOptions = [
	{
		key: 'nishinomiya',
		text: <LanguageToggle JpContent={()=>'西宮北口'} EngContent={()=>'Nishinomiya'} />,
		value: 'nishinomiya',

	},
	{
		key: 'senri',
		text: <LanguageToggle JpContent={()=>'千里中央'} EngContent={()=>'Senrichuou'} />,
		value: 'senri',
	
	},
	{
		key: 'uehon',
		text: <LanguageToggle JpContent={()=>'上本町'} EngContent={()=>'Uehonmachi'} />,
		value: 'uehon',
		
	},
];

const DropdownMenu = ({ handleOnChange }) => {
	return (
		<Dropdown placeholder="Select a school" fluid selection options={friendOptions} onChange={(e, data)=>handleOnChange(e, data)}>
			
			
		</Dropdown>
	);
};

export default DropdownMenu;