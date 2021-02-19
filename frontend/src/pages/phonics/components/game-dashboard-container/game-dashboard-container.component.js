import React from 'react';
import GameDashboard from '../../../../components/game-dashboard/game-dashboard.component'
import { onGameEnd, onHelp } from '../../../../actions/phonicsGameActions';
import { connect } from 'react-redux';

const GameDashboardContainer = ({ currentWords, helpHandler, onGameEndHandler, currentDeckIndex, totalGamePoints, time }) => {
   

   
   return<GameDashboard helpHandler={helpHandler} currentWords={currentWords} onGameEndHandler={onGameEndHandler} currentDeckIndex={currentDeckIndex} totalGamePoints={totalGamePoints} time={time}/>
};

const mapStateToProps = (state) => ({
   time: state.phonicsGameReducer.totalGameTime,
   currentWords: state.phonicsGameReducer.currentWords,
	currentDeckIndex: state.phonicsGameReducer.currentDeckIndex,
   totalGamePoints: state.phonicsGameReducer.totalGamePoints
});

const mapDispatchToProps = dispatch => ({
	onGameEndHandler: ()=>dispatch(onGameEnd()),
   helpHandler: ()=>dispatch(onHelp())
});

export default connect(mapStateToProps, mapDispatchToProps )(GameDashboardContainer)