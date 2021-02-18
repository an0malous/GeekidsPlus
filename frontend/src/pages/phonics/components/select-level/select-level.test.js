import React from 'react'
import renderer from 'react-test-renderer';
import SelectLevel from './select-level.component';

describe('AlphabetCard Component', () => {
   let component;

   beforeEach(() => {
     component = renderer
     .create(<SelectLevel />)
     .toJSON()
   });
   
   it('Renders', () => {
      expect(component).toMatchSnapshot()
   })
});

