import React from 'react'
import renderer from 'react-test-renderer';
import PhonicsGame from './phonics-game.component.jsx';
import { Provider } from 'react-redux';
import store from '../../../../store';


describe('AlphabetCard Component', () => {
   let component;
   
   store.phonicsGameReducer.currentWords = [{name:"cat", 
   type: "cvc", 
   img:"test@test.com", 
   audio:null}]

   beforeEach(() => {
      
   
     component = renderer
     .create(<Provider store={store}><PhonicsGame /></Provider>)
     .toJSON()
   });
   
   it('Renders', () => {
      expect(component).toMatchSnapshot()
   })
});

