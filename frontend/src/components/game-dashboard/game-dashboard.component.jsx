import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Thumbnail from '../thumbnail/thumbnail.component';

const GameDashboard = ({
	currentWords,
	onGameEnd,
	currentDeckIndex,
	totalGamePoints,
	time,
	helpHandler,
}) => {
	const currentWord = currentWords[currentDeckIndex];
	return currentWords ? (
		<Grid verticalAlign="middle">
			<Grid.Column
				style={{ height: "60px", alignItems: "center", display:"flex", flexDirection: "row", justifyContent: "space-evenly", padding: 0, margin: 0 }}
				width={5}
				color="orange"
			>
				<div style={{display: "flex", flexDirection: "column"}}>
					<div><FontAwesomeIcon size="lg" icon="trophy" />{' '}</div>
					<div>{totalGamePoints}</div>
				</div>
				<div style={{display: "flex", flexDirection: "column", overflow: "hidden"}}>
					<div><FontAwesomeIcon size="lg" icon="stopwatch" />{' '}</div>
					<div>{`${parseInt(time / 60)} : ${time % 60}`}</div>
				</div>
			</Grid.Column>

			<Grid.Column
				style={{ padding: 0, margin: 0 }}
				centered={true}
				width={6}
			>
				<Thumbnail
					src={require(`../../asssets/words${currentWord.img}`)}
					width="100%"
				/>
			</Grid.Column>

			<Grid.Column
				style={{ height: "60px", alignItems: "center", display:"flex", flexDirection: "row", justifyContent: "space-evenly", padding: 0, margin: 0 }}
				width={5}
				color="orange"
			>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div>{currentDeckIndex + 1} </div> <div>/</div>{' '}
					<div>{currentWords.length}</div>
				</div>
				<div><FontAwesomeIcon size="lg" icon="volume-up" /></div>
			</Grid.Column>
		</Grid>
	) : (
		'Loading Dashboard...'
	);
};

export default GameDashboard;
