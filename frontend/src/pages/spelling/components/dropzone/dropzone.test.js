import React from 'react'
import renderer from 'react-test-renderer'
import Dropzone from './dropzone.component';

describe('Dropzone Component', () => {
   let component;

   const handleDropzones=(payload)=>{
      return payload
   }

   beforeEach(() => {
     component = renderer.create(<Dropzone handleDropzones={handleDropzones} />).toJSON()
   });
   
   it('Renders without crashing', () => {
      expect(component).toMatchSnapshot()
   })
});

