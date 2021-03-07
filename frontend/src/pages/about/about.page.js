import React from 'react';
import { Keyframes, Spring } from 'react-spring/renderprops';
import Cirriculum from '../home/cirriculum.component';

const About = () => {
	return (
		<div>
			<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
				{(props) => <div style={props}>
               <Cirriculum />
            </div>}
			</Spring>
         
		</div>
	);
};

export default About;
