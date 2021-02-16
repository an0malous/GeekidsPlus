import React, { useEffect } from 'react';

import DropzoneContainer from '../dropzone-container/dropzone-container.component';
import AlphabetContainer from '../alphabetcard-container/alphabet-container.component';
import GameDashboard from '../../../../components/game-dashboard/game-dashboard.component';
import RoundBreakdown from '../../../../components/round-breakdown/round-breakdown';
import { startTimerAsync, onGameEnd, stopTimer1 } from '../../../../actions/phonicsGameActions';
import { connect } from 'react-redux';

const PhonicsGame = ({ openRoundBreakdown, currentWords, currentDeckIndex, currentWordLetters, onGameEnd, totalGamePoints, time }) => {
	useEffect(()=>{
		startTimerAsync();
		return ()=> stopTimer1()
  }, [currentDeckIndex])

	return (
		<div>
			{openRoundBreakdown ? <RoundBreakdown /> : null}
			<GameDashboard currentWords={currentWords} onGameEnd={onGameEnd} currentDeckIndex={currentDeckIndex} totalGamePoints={totalGamePoints} time={time} />
			<DropzoneContainer currentWordLetters={currentWordLetters} />
			<AlphabetContainer currentWords={currentWords} currentDeckIndex={currentDeckIndex}/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	openRoundBreakdown: state.phonicsGameReducer.openRoundBreakdown,
	currentWords: state.phonicsGameReducer.currentWords,
	currentDeckIndex: state.phonicsGameReducer.currentDeckIndex,
	currentWordLetters: state.phonicsGameReducer.currentWordLetters,
	totalGamePoints: state.phonicsGameReducer.totalGamePoints,
	time: state.phonicsGameReducer.totalGameTime
});

const mapDispatchToProps = dispatch => ({
	startTimerAsync: ()=>dispatch(startTimerAsync()),
	onGameEnd: ()=>dispatch(onGameEnd()),
	stopTimer1: ()=>(dispatch(stopTimer1()))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonicsGame);
