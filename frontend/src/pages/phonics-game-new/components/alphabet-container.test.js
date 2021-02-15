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
            currentWords: [{name: "fun", type: "cvc", audio: null, img: null}, {name: "push", type: "blends", audio: null, img: null}],
				currentDekcIndex: 5,
			},
		});

		component = renderer.create(
			<Provider store={store}>
				<AlphabetContainer />
			</Provider>
		);
	});

	it('should render with given state from Redux store', () => {
		expect(component).toMatchSnapshot();
   });


  
  it('matches even if received contains additional elements', () => {
    expect(component).toHaveLength(26);
  })
})
