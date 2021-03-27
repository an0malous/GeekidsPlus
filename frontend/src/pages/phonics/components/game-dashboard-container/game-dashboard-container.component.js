import React from 'react';
import GameDashboard from '../../../../components/game-dashboard/game-dashboard.component';
import { onGameEnd, onHelp, onGameOver } from '../../../../actions/phonicsGameActions';
import { connect } from 'react-redux';

const GameDashboardContainer = ({
	currentWords,
	currentWord,
	helpHandler,
	onGameEnd,
	currentDeckIndex,
	totalGamePoints,
	time,
   tick,
   onGameOver,
   timer
}) => {
   if((time === 0 && tick === -1) || (currentDeckIndex === currentWords.length && currentWords > 1)){
      onGameOver();
      clearInterval(timer.current)
   }

	
	return (
		<GameDashboard
			helpHandler={helpHandler}
			currentWords={currentWords}
			onGameEnd={onGameEnd}
			currentDeckIndex={currentDeckIndex}
			totalGamePoints={totalGamePoints}
			time={time}
			
		/>
	);
};

const mapStateToProps = (state) => ({
	time: state.phonicsGameReducer.totalGameTime,
	currentWords: state.phonicsGameReducer.currentWords,
	currentWord: state.phonicsGameReducer.currentWords[state.phonicsGameReducer.currentDeckIndex],
	currentDeckIndex: state.phonicsGameReducer.currentDeckIndex,
	totalGamePoints: state.phonicsGameReducer.totalGamePoints,
   tick: state.phonicsGameReducer.tick
});

const mapDispatchToProps = (dispatch) => ({
   onGameOver: ()=> dispatch(onGameOver()),
	onGameEnd: () => dispatch(onGameEnd()),
	helpHandler: () => dispatch(onHelp()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameDashboardContainer);
