import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const friendOptions = [
	{
		key: 'nishinomiya',
		text: 'Nishinomiya',
		value: 'nishinomiya',
		image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
	},
	{
		key: 'senri',
		text: 'Senri-chuou',
		value: 'senri',
		image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
	},
	{
		key: 'uehon',
		text: 'Uehonmachi',
		value: 'uehon',
		image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
	},
];

const DropdownMenu = ({ handleOnChange }) => {
	return (
		<Dropdown placeholder="Select a school" fluid selection options={friendOptions} onChange={(e, data)=>handleOnChange(e, data)}>
			
			
		</Dropdown>
	);
};

export default DropdownMenu;
