import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import AlphabetCard from './alphabet-card.component';

describe('AlphabetCard Component', () => {
	let component;

	beforeEach(() => {
		component = render(<AlphabetCard letter="a" />);
	});

	it('checks a snapshot', () => {
		expect(renderer.create(<AlphabetCard />).toJSON()).toMatchSnapshot();
	});

	it('Renders correct letter', () => {
		const { getByText } = component;
		const letter = getByText('a');

		expect(letter.textContent).toBe('a');
	});

	it('Resets letters on unmount', () => {
		const { getByText, unmount } = component;
		const letter = getByText('a');
		letter.style.transform = 'translate(' + 100 + 'px, ' + 200 + 'px)';
		unmount();
		expect(letter.style.transform).toBe(
			'translate(' + 0 + 'px, ' + 0 + 'px)'
		);
	});
});
