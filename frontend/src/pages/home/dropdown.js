import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const friendOptions = [
	{
		key: 'nishinomiya',
		text: 'Nishinomiya',
		value: 'nishinomiya',

	},
	{
		key: 'senri',
		text: 'Senri-chuou',
		value: 'senri',
	
	},
	{
		key: 'uehon',
		text: 'Uehonmachi',
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