import React from 'react'
import renderer from 'react-test-renderer';
import PhonicsGameStartMenu from './phonics-game-start-menu.component';

describe('AlphabetCard Component', () => {
   let component;

   beforeEach(() => {
     component = renderer
     .create(<PhonicsGameStartMenu />)
     .toJSON()
   });
   
   it('Renders', () => {
      expect(component).toMatchSnapshot()
   })
});

