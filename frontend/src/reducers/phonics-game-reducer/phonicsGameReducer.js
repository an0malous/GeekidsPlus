import gameDashboardComponent from "../../components/game-dashboard/game-dashboard.component";
import { internalTimer, calculatePoints } from './phonics-game.utils';

const INITIAL_STATE = {
    currentWords: [],
    currentWord: '',
    isFetching: false,
    errorMessage: '',
    currentDeckIndex: 0,
    currentPoints: 0,
    totalTime: 0

}

const phonicsGameReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case `GET_CURRENT_WORD`:
            return {
                ...state,
                
            };

        case 'FETCH_CURRENT_WORDS_START':
            return {
                ...state,
                isFetching: true
            };

        case 'FETCH_CURRENT_WORDS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                currentWords: action.payload,
                currentDeckIndex: 0
            };
        case `ON_GAME_END`:
            return {
                ...state,
                currentWords: [],
                currentWord: '',
                currentDeckIndex: 0,
                currentPoints: 0
            };

        case 'FETCH_CURRENT_WORDS_FAILURE':
            return {
                ...state,
                errorMessage: action.payload
            };
        
        case 'ON_ROUND_START':
            return {
                ...state,

                currentWord: state.currentWords[state.currentDeckIndex]
            }
        case 'ON_ROUND_COMPLETE':
            return {
                ...state,
                currentPoints: calculatePoints(state.currentPoints, state.currentWord, internalTimer.stop()),
                currentDeckIndex: state.currentDeckIndex + 1
            };
    
        default: return state;
    };
};

export default phonicsGameReducer;