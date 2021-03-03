import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
						<FontAwesomeIcon size="10x" icon="graduation-cap" />
							
						</div>
					</Grid.Column>
					<Grid.Column width={8}>
						<div
							onClick={() => {
								setGameType('competitive');
							
							}}
						>
						<FontAwesomeIcon size="10x" icon="medal" />
							
						</div>
					</Grid.Column>
				</Grid>
			</Container>
		</div>
	);
};

export default selectType;
