import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import AlphabetContainer from './alphabet-container.component';
import { unmountComponentAtNode } from 'react-dom';

describe('Alphabet Card Container', () => {
	let mockProps;
	let component;

	beforeEach(() => {
		mockProps = {
            currentWords: [ {name: "push", type: "blends", audio: null, img: null}, {name: "cat", type: "cvc", audio: null, img: null}],
				currentDeckIndex: 0
			}
				component = render(<AlphabetContainer {...mockProps} />);
	});

	
	it('matches Snapshot', ()=>{
		expect(renderer
		.create(<AlphabetContainer {...mockProps}/>)
		.toJSON()).toMatchSnapshot()
	});

	it('renders 26 cards when current word is cvc', ()=>{
		const { unmount } = component;
		unmount()
		component = render(<AlphabetContainer currentWords={mockProps.currentWords} currentDeckIndex={1} />)
		const { getAllByTestId } = component;
		const cards = getAllByTestId('alphabet-card')
		expect(cards.length).toEqual(26)
	});

	it('renders 27 cards when current word is blend', ()=>{
		
		const { getAllByTestId } = component;
		const cards = getAllByTestId('alphabet-card')
		expect(cards.length).toEqual(27)
	});

})


