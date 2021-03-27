import React, { useEffect, useRef, Fragment } from 'react';

import DropzoneContainer from '../dropzone-container/dropzone-container.component';
import AlphabetContainer from '../alphabetcard-container/alphabet-container.component';
import GameDashboardContainer from '../game-dashboard-container/game-dashboard-container.component';
import RoundBreakdown from '../../../../components/round-breakdown/round-breakdown';
import LanguageToggle from '../../../../components/language-display-container/language-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Header, Grid } from 'semantic-ui-react';

const Breakdown = (props) => {
	return (
		<Grid style={{ fontSize: '2rem' }}>
			<Grid.Column textAlign="center">
				<Grid.Row style={{ color: 'orange' }}>
					<FontAwesomeIcon size="lg" icon="stopwatch" />
				</Grid.Row>
				<Grid.Row style={{ padding: "1rem", fontSize: '3rem' }}>
					{props.currentElapsedTime} s
				</Grid.Row>
				<Grid.Row style={{ color: 'orange' }}>
				<FontAwesomeIcon size="lg"  icon="stopwatch" /> Bonus
				</Grid.Row>
				<Grid.Row style={{ padding: "1rem", fontSize: '3rem' }}>
					{props.roundPoints} pts
				</Grid.Row>
				<Grid.Row style={{ color: 'orange' }}>
					<FontAwesomeIcon size="lg" icon="trophy" />
				</Grid.Row>
				<Grid.Row style={{ padding: "1rem", fontSize: '3rem' }}>
					{props.totalGamePoints} pts
				</Grid.Row>
				<Grid.Row>
					<button
						style={{
							paddingTop: '3rem',
							color: 'white',
							fontSize: '2rem',
						}}
						onClick={() => props.onRoundStart()}
					>
						<LanguageToggle
							JpContent={() => (
								<Fragment>つぎ の ラウンド</Fragment>
							)}
							EngContent={() => <Fragment>Next Round</Fragment>}
						/>
					</button>
				</Grid.Row>
			</Grid.Column>
		</Grid>
	);
};

const GameOverScreen = (props) => {
	return (
		<Grid style={{ fontSize: '2rem' }}>
			<Grid.Column textAlign="center">
				<Grid.Row style={{ color: 'orange' }}>
					you Finished with
				</Grid.Row>
				<Grid.Row style={{ fontSize: '3rem' }}>
					{props.totalGamePoints} {'pts'}
				</Grid.Row>
				<Grid.Row>
					<button
						style={{
							paddingTop: '3rem',
							color: 'white',
							fontSize: '2rem',
						}}
						onClick={() => {
							props.onGameEnd();
						}}
					>
						Play Again
					</button>
				</Grid.Row>
			</Grid.Column>
		</Grid>
	);
};

const PhonicsGame = ({
	openRoundBreakdown,
	currentWords,
	currentDeckIndex,
	onTimerTick,
	openGameOverScreen,
}) => {
	const timer = useRef(null);
	useEffect(() => {
		const id = setInterval(onTimerTick, 1000);
		timer.current = id;
		return () => clearInterval(timer.current);
	}, [onTimerTick, currentDeckIndex]);

	return (
		<div>
			<Modal
				basic
				closeOnDimmerClick={false}
				open={openGameOverScreen || openRoundBreakdown}
				size="large"
			>
				<Modal.Header>
					<Header
						style={{ paddingBottom: '2rem' }}
						textAlign="center"
						color="orange"
					>
						{openRoundBreakdown
							? 'Congratulations'
							: 'Awesome Job!'}{' '}
					</Header>
				</Modal.Header>
				<RoundBreakdown
					render={openRoundBreakdown ? Breakdown : GameOverScreen}
				/>
			</Modal>

			<GameDashboardContainer timer={timer} />
			<div className="alphabet-container">
				<DropzoneContainer timer={timer} />
				<AlphabetContainer
					currentWords={currentWords}
					currentDeckIndex={currentDeckIndex}
				/>
			</div>
		</div>
	);
};

export default PhonicsGame;
