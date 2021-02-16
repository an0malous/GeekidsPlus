import React from 'react'
import { shallow } from 'enzyme'
import AlphabetCard from './alphabet-card.component';
let component = shallow(<AlphabetCard />)
it('Renders', ()=> {
   
   expect(component).toMatchSnapshot()
})

it('Use effect works', () => {
   expect(component.instance().useEffect()).toBeTruthy();
})