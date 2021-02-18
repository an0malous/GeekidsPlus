import React from 'react'
import renderer from 'react-test-renderer';
import AlphabetCard from './alphabet-card.component';

describe('AlphabetCard Component', () => {
   let component;

   beforeEach(() => {
     component = renderer
     .create(<AlphabetCard />)
     .toJSON()
   });
   
   it('Renders', () => {
      expect(component).toMatchSnapshot()
   })
});

