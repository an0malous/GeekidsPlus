import { calculatePoints, createCurrentWordLetters } from './phonics-game.utils';

const INITIAL_STATE = {
    currentWords: [],
    currentWordLetters: [],
    isFetching: false,
    errorMessage: '',
    currentDeckIndex: 0,
    roundPoints: 0,
    totalGamePoints: 0,
    currentElapsedTime: 0,
    totalGameTime: 0,
    openRoundBreakdown: false
}

const phonicsGameReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case `GET_CURRENT_WORD`:
            return {
                ...state,
                currentWord: state.currentWords[state.currentDeckIndex]
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
                currentWords: action.payload
            };

        case 'ON_GAME_START':
            return {
                ...state,
                currentWordLetters: createCurrentWordLetters(state.currentWords[state.currentDeckIndex])
            };

        case 'ON_TIMER_START':
            return {
                ...state
            };

        case 'ON_TIMER_STOP':
            return {
                ...state,
                totalGameTime: state.totalGameTime + state.currentElapsedTime,
                currentElapsedTime: 0
            }

        case 'ON_TIMER_TICK':
            return {
                ...state,
                currentElapsedTime: state.currentElapsedTime + 1
            }

        case 'ON_GAME_END':
            return {
                ...state,
                currentWords: [],
                isFetching: false,
                errorMessage: '',
                currentDeckIndex: 0,
                currentPoints: 0,
                currentElapsedTime: 0,
                totalGameTime: 0

            };

        case 'FETCH_CURRENT_WORDS_FAILURE':
            return {
                ...state,
                errorMessage: action.payload
            };
        
        case 'ON_ROUND_START':
            return {
                ...state,
                currentWordLetters: createCurrentWordLetters(state.currentWords[state.currentDeckIndex + 1]),
                openRoundBreakdown: !state.openRoundBreakdown,
                roundPoints: 0,
                currentDeckIndex: state.currentDeckIndex + 1 
            };

        case 'ON_ROUND_COMPLETE':
            return {
                ...state,
                roundPoints: calculatePoints(state.currentWords[state.currentDeckIndex].name.length, state.currentElapsedTime),
                totalGamePoints: state.totalGamePoints + state.roundPoints,
                openRoundBreakdown: !state.openRoundBreakdown,
            };
    
        default: return state;
    };
};

export default phonicsGameReducer;