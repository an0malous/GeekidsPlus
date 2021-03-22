import React, { useEffect, useRef } from 'react';

import DropzoneContainer from '../dropzone-container/dropzone-container.component';
import AlphabetContainer from '../alphabetcard-container/alphabet-container.component';
import GameDashboardContainer from '../game-dashboard-container/game-dashboard-container.component';
import RoundBreakdown from '../../../../components/round-breakdown/round-breakdown';
import { Modal, Header, Grid } from 'semantic-ui-react';

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
					<Header color="orange">Congratulations </Header>
				</Modal.Header>
				<RoundBreakdown
					render={(props) => {
						console.log(props);
						return (
							<Grid style={{fontSize: "2rem"}}>
								<Grid.Column textAlign="center">
									<Grid.Row>
										You finished in{' '}
										
									</Grid.Row>
									<Grid.Row style={{fontSize: "3rem"}}>
									{props.currentElapsedTime} seconds
									</Grid.Row>
									<Grid.Row>
									 This Round you received 
									</Grid.Row>
									<Grid.Row style={{fontSize: "3rem"}}>
									{props.roundPoints} pts
									</Grid.Row>
									<Grid.Row>
										you now have
									</Grid.Row>
									<Grid.Row style={{fontSize: "3rem"}}>
									{props.totalGamePoints}{' '}
									</Grid.Row>
									<Grid.Row>
										Keep it up!{' '}
										<button
											onClick={() => props.onRoundStart()}
										>
											Next Round
										</button>
									</Grid.Row>
								</Grid.Column>
							</Grid>
						);
					}}
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
