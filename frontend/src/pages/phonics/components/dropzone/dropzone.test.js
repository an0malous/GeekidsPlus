import React from 'react'
import renderer from 'react-test-renderer'
import Dropzone from './dropzone.component';

describe('Dropzoneu Component', () => {
   let component;

   beforeEach(() => {
     component = renderer.create(<Dropzone />).toJSON()
   });
   
   it('Renders', () => {
      expect(component).toMatchSnapshot()
   })
});

