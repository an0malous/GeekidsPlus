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
				centered={true}
				basic
				closeOnDimmerClick={false}
				open={openGameOverScreen || openRoundBreakdown}
				size="huge"
			>
				<Modal.Header>
					<Header>RoundBreakdown</Header>
				</Modal.Header>
				<RoundBreakdown
					render={(props) => {
						console.log(props);
						return (
							<Grid centered={true}>
								<Grid.Column centered={true}>
									<Grid.Row>
										Congratulations you finished in{' '}
										{props.currentElapsedTime} seconds
									</Grid.Row>
									<Grid.Row>
										You received {props.roundPoints} this
										Round
									</Grid.Row>
									<Grid.Row>
										You now have {props.totalGamePoints}{' '}
										this game
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
			<DropzoneContainer timer={timer} />
			<AlphabetContainer
				currentWords={currentWords}
				currentDeckIndex={currentDeckIndex}
			/>
		</div>
	);
};

export default PhonicsGame;
