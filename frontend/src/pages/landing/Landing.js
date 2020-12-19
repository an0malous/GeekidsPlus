import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { LandingContainer } from './landing.styles';
import { useHistory } from 'react-router';
import Login from '../login/login';
export const Landing = (props) => {
	let history = useHistory();
	const handleButtonClick = (e) => {
		history.push(`/${e.target.name}`);
	};
	return (
		<LandingContainer>
			<div >
				<div
					style={{
						maxWidth: '500px',
						lineHeight: '1',
						paddingBottom: '10px',
						fontSize: '3.5rem',
						color: 'white',
						textShadow: '2px 2px black',
					}}
				>
					Your Cirriculum. Anytime. Anywhere.
				</div>
				<Button
					primary
					name="register"
					onClick={handleButtonClick}
					size="big"
				>
					Get Started
				</Button>
				<Login />
			</div>
		</LandingContainer>
	);
};
