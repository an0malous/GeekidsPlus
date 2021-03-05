import React, { Fragment } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LanguageToggle from '../../../../components/language-display-container/language-toggle'

const PracticeCaption = () => {
	return (
		<div><Header as="h3">Practice </Header>
		Improve your weak areas and learn from your mistakes.
		</div>

		
	)
}

const CompetitiveCaption = () => {
	return (
		<div><Header as="h3">Competitive </Header>
		Test your skills and compete for the highest score.
		</div>

		
	)
}

const selectType = ({ setGameType }) => {
	return (
			
				<Grid stackable={true} container={true} centered={true}>
					<Grid.Column textAlign="center" width={8}>
						<div
							onClick={() => {
								setGameType('practice');
							}}
						>
							<FontAwesomeIcon size="10x" icon="graduation-cap" />
							<LanguageToggle EngContent={()=><PracticeCaption />}/>
						</div>
					</Grid.Column>
					<Grid.Column textAlign="center" width={8}>
						<div
							onClick={() => {
								setGameType('competitive');
							}}
						>
							<FontAwesomeIcon size="10x" icon="medal" />
							<LanguageToggle EngContent={()=><CompetitiveCaption />}/>
						</div>
					</Grid.Column>
				</Grid>
			
	);
};

export default selectType;
