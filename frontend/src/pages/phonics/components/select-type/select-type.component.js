import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
const selectType = ({ setGameType }) => {

	return (
		<div>
			<Container>
				<Grid centered>
					<Grid.Column width={8}>
						<div
							onClick={() => {
								setGameType('practice');
							
							}}
						>
							Practice
						</div>
					</Grid.Column>
					<Grid.Column width={8}>
						<div
							onClick={() => {
								setGameType('competitive');
							
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
