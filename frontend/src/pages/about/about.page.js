import React from 'react';
import {animated, useSpring} from 'react-spring'
const About = () => {
	const props = useSpring({ val: 100, from: { val: 0 } })
return <animated.span>{props.val.interpolate(val => Math.floor(val))}</animated.span>
};

export default About;
