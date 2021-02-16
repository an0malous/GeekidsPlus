import React from 'react';
import { shallow } from 'enzyme';
import AlphabetContainer from './alphabet-container.component';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
	let store;
	let component;

	beforeEach(() => {
		store = mockStore({
			phonicsGameReducer: {
            currentWords: [ {name: "push", type: "blends", audio: null, img: null}],
				currentDeckIndex: 0
			},
		});

		component = renderer(
			<Provider store={store}>
				<AlphabetContainer />
			</Provider>
		);
	});

	it('should render with given state from Redux store', () => {
		expect(component).toMatchSnapShot();
   });

})
