import React from 'react';
import { useHistory } from 'react-router';
import { Grid, Container } from 'semantic-ui-react';
const selectType = ({ setGameType }) => {
	let history = useHistory();

	return (
		<div>
			<Container>
				<Grid centered>
					<Grid.Column width={8}>
						<div
							onClick={() => {
								setGameType('practice');
								history.push('/practice');
							}}
						>
							Practice
						</div>
					</Grid.Column>
					<Grid.Column width={8}>
						<div
							onClick={() => {
								setGameType('competitive');
								history.push('/competitve');
							}}
						>
							Competitive
						</div>
					</Grid.Column>
				</Grid>
			</Container>
		</div>
	);
};

export default selectType;
