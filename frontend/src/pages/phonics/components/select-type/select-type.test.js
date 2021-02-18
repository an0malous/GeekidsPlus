import React from 'react'
import renderer from 'react-test-renderer';
import SelectType from './select-type.component';

describe('AlphabetCard Component', () => {
   let component;

   beforeEach(() => {
     component = renderer
     .create(<SelectType />)
     .toJSON()
   });
   
   it('Renders', () => {
      expect(component).toMatchSnapshot()
   })
});

