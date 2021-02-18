import React from 'react'
import renderer from 'react-test-renderer';
import PhonicsGame from './phonics-game.component.jsx';

describe('AlphabetCard Component', () => {
   let component;

   beforeEach(() => {
     component = renderer
     .create(<PhonicsGame />)
     .toJSON()
   });
   
   it('Renders', () => {
      expect(component).toMatchSnapshot()
   })
});

