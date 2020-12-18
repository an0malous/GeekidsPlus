import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { LandingContainer } from './landing.styles';
import { useHistory } from 'react-router';
export const Landing = (props) => {
	let history = useHistory();
	const handleButtonClick = (e) => {
		history.push(`/${e.target.name}`);
	};
	return (
		<LandingContainer>
			<div>
				<div
					style={{
						maxWidth: '600px',
						lineHeight: '1',
						paddingBottom: '10px',
						fontSize: '3rem',
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
				<Button
					name="login"
					onClick={handleButtonClick}
					secondary
					size="big"
				>
					Login
				</Button>
			</div>
		</LandingContainer>
	);
};
