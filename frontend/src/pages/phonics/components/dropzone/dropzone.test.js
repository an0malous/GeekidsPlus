import React from 'react'
import { shallow } from 'enzyme'
import Dropzone from './dropzone.component';

describe('Dropzoneu Component', () => {
   let component;

   beforeEach(() => {
     component = shallow(<Dropzone />)
   });
   
   it('Renders', () => {
      expect(component).toMatchSnapshot()
   })
});

