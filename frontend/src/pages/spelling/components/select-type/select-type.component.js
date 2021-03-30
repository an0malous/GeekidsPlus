import React, { Fragment } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LanguageToggle from '../../../../components/language-display-container/language-toggle';

const PracticeCaption = () => {
	return (
		<LanguageToggle
			EngContent={() => (
				<div>
					<Header as="h3">Practice </Header>
					Improve your weak areas and learn from your mistakes.
				</div>
			)}
			JpContent={() => (
				<div>
					<Header as="h3">れんしゅう </Header>
					弱いところを上達しましょう.
				</div>
			)}
		/>
	);
};

const CompetitiveCaption = () => {
	return (
		<div>
			<LanguageToggle
				EngContent={() => (
					<Fragment>
						<Header as="h3">Competitive </Header>
						Compete For the highest score.
					</Fragment>
				)}
				JpContent={() => (
					<Fragment>
						<Header as="h3">たいかい</Header>
						ハイスコアげっとまであきらめないで頑張ろう.
					</Fragment>
				)}
			/>
		</div>
	);
};

const selectType = ({ setGameType, setModalHeader }) => {
	return (
		<Grid stackable={true} container={true} centered={true}>
			<Grid.Column textAlign="center" width={8}>
				<div
					style={{
						backgroundColor: '#FA8000 ',
						borderRadius: '15px',
						padding: '5px 10px',
					}}
					onClick={() => {
						setModalHeader('Select a level');
						setGameType('practice');
					}}
				>
					<FontAwesomeIcon
						color="white"
						size="10x"
						icon="graduation-cap"
					/>
					<PracticeCaption />
				</div>
			</Grid.Column>
			<Grid.Column textAlign="center" width={8}>
				<div
					style={{
						backgroundColor: '#FA8000 ',
						borderRadius: '15px',
						padding: '5px 10px',
					}}
					onClick={() => {
						setGameType('competitive');
						setModalHeader('Select a level');
					}}
				>
					<FontAwesomeIcon color="white" size="10x" icon="medal" />
					<CompetitiveCaption />
				</div>
			</Grid.Column>
		</Grid>
	);
};

export default selectType;
