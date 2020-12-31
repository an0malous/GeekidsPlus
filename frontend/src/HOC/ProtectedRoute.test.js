import React from 'react';
import { shallow } from 'enzyme';
import ProtectedRoute from './ProtectedRoute';

it('expect ProtectedRoute component to render', ()=>{
   expect(shallow(<ProtectedRoute />)).toMatchSnapshot();
});