import React from 'react'
import renderer from 'react-test-renderer';
import SelectMode from './select-mode.component';

describe('AlphabetCard Component', () => {
   let component;

   beforeEach(() => {
     component = renderer
     .create(<SelectMode />)
     .toJSON()
   });
   
   it('Renders', () => {
      expect(component).toMatchSnapshot()
   })
});

