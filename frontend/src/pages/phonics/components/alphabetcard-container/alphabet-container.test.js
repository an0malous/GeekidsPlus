import React from 'react';
import renderer from 'react-test-renderer';
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
		component = renderer
		.create(<AlphabetContainer currentDeckIndex={currentDeckIndex} currentWords={currentWords}/>)
		.toJSON()
	});

	it('renders without crashing', () => {
		expect(component).toMatchSnapshot();
   });

})


