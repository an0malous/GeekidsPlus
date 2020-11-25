import React from 'react';
import GameDashboard from '../../../components/game-dashboard/game-dashboard.component';
import GameAnswerInput from '../components/game-answer-input.component';
import { connect } from 'react-redux';
import QuizInterface from './quiz-interface.component';


// Levels
// Review Mode -> sound to picture recognition -> picture to spelling  -> sound to Spelling recognition MAKE SURE ALL ARE RANDOMLY INVERSED
//
//


const FlashCards = () => (
    <div>
        <GameDashboard />
        <GameAnswerInput />
        <QuizInterface />

    </div>
);
const mapStateToProps = state => ({
    isFetching: state.phonicsGameReducer.isFetching,
    fetchSuccessful: state.phonicsGameReducer.currentWords,
    openRoundBreakdown: state.phonicsGameReducer.openRoundBreakdown
});


export default connect(mapStateToProps)(FlashCards);