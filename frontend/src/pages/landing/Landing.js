import React from 'react';
import { Button } from 'semantic-ui-react';
import { LandingContainer } from './landing.styles';
import { useHistory } from 'react-router';
const LandingPage = (props) => {
	let history = useHistory();
	const handleButtonClick = (e) => {
		history.push(`/${e.target.name}`);
	};
	return (
		<LandingContainer>
			<div >
				<div
					style={{
						maxWidth: '600px',
						lineHeight: '1.2',
						paddingBottom: '10px',
						fontSize: '3.5rem',
						color: 'white',
						textShadow: '2px 2px black',
					}}
				>
					Your <span style={{color: 'rgb(240, 185, 6)'}}>Cirriculum.</span> Anytime. Anywhere.
				</div>
				<Button
					style={{background: 'rgb(240, 185, 6)', color: "black"}}
					name="register"
					onClick={handleButtonClick}
					size="big"
				>
					Get Started
				</Button>
			</div>
		</LandingContainer>
	);
};

export default LandingPage;