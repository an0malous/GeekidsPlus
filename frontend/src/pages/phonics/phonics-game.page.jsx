import React, { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import PhonicsGame from './components/phonics-game/phonics-game.component';
import PhonicsGameStartMenu from './components/start-menu/phonics-game-start-menu.component';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { onGameEnd } from '../../actions/phonicsGameActions';
import {
	fetchCurrentWords,
	getGameParams,
	onGameStart,
	onTimerTick,
	onTimerStop
} from '../../actions/phonicsGameActions';

const PhonicsGamePage = ({
	onGameEnd,
	currentDeckIndex,
	currentWordLetters,
	openRoundBreakdown,
	currentWords,
	fetchCurrentWords,
	getGameParams,
	onGameStart,
	onTimerTick,
	onTimerStop
}) => {
	const [open, setOpen] = useState(true);
	let history = useHistory();
	return (
		<Modal
			basic
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			size="small"
		>
			<Header icon>Phonics</Header>
			<Modal.Content>
				{currentWords.length > 0 ? (
					<PhonicsGame
					onTimerStop={onTimerStop} // TODO: STOP PROP DRILLING THIS AND FIND A BETTER SOLUTION
						onTimerTick={onTimerTick}
						currentWordLetters={currentWordLetters}
						openRoundBreakdown={openRoundBreakdown}
						currentWords={currentWords}
						currentDeckIndex={currentDeckIndex}
					/>
				) : (
					<PhonicsGameStartMenu
						onGameStart={onGameStart}
						getGameParams={getGameParams}
						fetchCurrentWords={fetchCurrentWords}
					/>
				)}
			</Modal.Content>
			<Modal.Actions>
				<Button
					basic
					color="red"
					inverted
					onClick={() => {
						setOpen(false);
						onGameEnd();
						history.push('/');
					}}
				>
					<Icon name="remove" /> Exit Phonics
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

const mapDispatchToProps = (dispatch) => ({
	onGameEnd: () => dispatch(onGameEnd()),
	fetchCurrentWords: () => dispatch(fetchCurrentWords()),
	onGameStart: () => dispatch(onGameStart()),
	getGameParams: (gameInfo) => dispatch(getGameParams(gameInfo)),
	onTimerTick: ()=>dispatch(onTimerTick()),
	onTimerStop: ()=>dispatch(onTimerStop())
});

const mapStateToProps = (state) => ({
	openRoundBreakdown: state.phonicsGameReducer.openRoundBreakdown,
	currentWords: state.phonicsGameReducer.currentWords,
	currentDeckIndex: state.phonicsGameReducer.currentDeckIndex,
	currentWordLetters: state.phonicsGameReducer.currentWordLetters,
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonicsGamePage);
