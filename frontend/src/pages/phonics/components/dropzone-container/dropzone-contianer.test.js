import React from 'react';
import { shallow } from 'enzyme';
import DropzoneContainer from './dropzone-container.component';

describe('Dropzone Container', () => {
	let props;
	let component;

	beforeEach(() => {
		props = {
            currentWordLetters: ["g", "u", "m"],
		
			}
				const {currentWordLetters } = props
		component = shallow(<DropzoneContainer currentWordLetters={currentWordLetters}/>)
	});

	it('renders without crashing', () => {
		expect(component).toMatchSnapshot();
   });
});
