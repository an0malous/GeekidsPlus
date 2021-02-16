import React from 'react'
import { shallow } from 'enzyme'
import AlphabetCard from './alphabet-card.component';

describe('AlphabetCard Component', () => {
   let component;

   beforeEach(() => {
     component = shallow(<AlphabetCard />)
   });
   
   it('Renders', () => {
      expect(component).toMatchSnapshot()
   })
});


