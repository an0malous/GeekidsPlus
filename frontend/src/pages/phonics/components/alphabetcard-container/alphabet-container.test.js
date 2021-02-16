import React from 'react';
import { shallow } from 'enzyme';
import AlphabetContainer from './alphabet-container.component';

describe('Alphabet Card Container', () => {
	let props;
	let component;

	beforeEach(() => {
		props = {
            currentWords: [ {name: "push", type: "blends", audio: null, img: null}],
				currentDeckIndex: 0
			}
				const {currentDeckIndex, currentWords } = props
		component = shallow(<AlphabetContainer currentDeckIndex={currentDeckIndex} currentWords={currentWords}/>)
	});

	it('renders without crashing', () => {
		expect(component).toMatchSnapshot();
   });

})
