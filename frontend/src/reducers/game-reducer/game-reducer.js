
import { calculatePoints, createCurrentWordLetters, filterWordData } from './game.utils';

const INITIAL_STATE = {
    currentWords: [],
    words: [],
    currentWordLetters: [],
    isFetching: false,
    errorMessage: '',
    currentDeckIndex: 0,
    roundPoints: 0,
    totalGamePoints: 0,
    roundTime: 0,
    totalGameTime: 0,
    openRoundBreakdown: false,
    gameParams: {},
    initialClock: null,
    tick: null
}

const phonicsGameReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case `GET_CURRENT_WORD`:
            return {
                ...state,
                currentWord: state.currentWords[state.currentDeckIndex]
            };

        case 'FETCH_WORDS_START':
            return {
                ...state,
                isFetching: true
            };

        case 'FETCH_WORDS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                words: action.payload
            };
        
        case 'SET_CURRENT_WORDS':
            return {
                ...state,
                currentWords: filterWordData(state.words, state.gameParams) 
            }

        case 'ON_GAME_START':
            return {
                ...state,
                totalGameTime: state.gameParams.initialClock,
                tick: state.gameParams.tick,
                currentWordLetters: createCurrentWordLetters(state.currentWords[state.currentDeckIndex])
            };

        case 'ON_TIMER_START':
            return {
                ...state,
            };

        case 'GET_GAME_PARAMS':
            return {
                ...state,
                gameParams: action.payload
            };

        case 'ON_TIMER_STOP':
            return {
                ...state,
                roundPoints: calculatePoints(state.currentWords[state.currentDeckIndex].name.length, state.roundTime)
            }

        case 'ON_TIMER_TICK':
            return {
                ...state,
                roundTime: state.gameParams.gameType !== 'practice' ? state.roundTime + 1 : 0, //used for calculating points too
                totalGameTime: state.totalGameTime + state.tick
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

        case 'FETCH_WORDS_FAILURE':
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
                roundTime: 0,
                currentDeckIndex: state.currentDeckIndex + 1 
            };

        case 'ON_ROUND_COMPLETE':
            return {
                ...state,
                totalGamePoints: state.roundPoints + state.totalGamePoints,
                openRoundBreakdown: !state.openRoundBreakdown,
            };
        case 'ON_SELECTION_COMPLETE':
            return {
                ...state,
               gameType: action.payload
            };
    
        default: return state;
    };
};

export default phonicsGameReducer;