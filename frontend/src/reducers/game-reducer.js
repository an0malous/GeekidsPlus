import { wordList as words } from '../asssets/words/wordlist';

import {
	calculatePoints,
	createCurrentWordLetters,
	filterWordData,
	checkIfLetterIsCorrect,
} from './game.utils';

const INITIAL_STATE = {
	currentWords: [],
	currentWordLetters: [],
	isFetching: false,
	errorMessage: '',
	currentDeckIndex: 0,
	roundPoints: 0,
	totalGamePoints: 0,
	roundTime: 0,
	totalGameTime: 0,
	letterPointsTime: 0,
	correctCounter: 0,
	openRoundBreakdown: false,
	openGameOverScreen: false,
	gameParams: {},
	initialClock: null,
	tick: null,
};

const phonicsGameReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case `GET_CURRENT_WORD`:
			return {
				...state,
				currentWord: state.currentWords[state.currentDeckIndex],
			};

		case 'FETCH_WORDS':
			return {
				...state,
				currentWords: filterWordData(words, state.gameParams),
			};

		case 'ON_GAME_START':
			return {
				...state,
				totalGameTime: state.gameParams.initialClock,
				tick: state.gameParams.tick,
				currentWordLetters: createCurrentWordLetters(
					state.currentWords[state.currentDeckIndex]
				),
			};

		case 'ON_HELP':
			return {
				...state,
			};

		case 'ON_TIMER_START':
			return {
				...state,
			};

		case 'GET_GAME_PARAMS':
			return {
				...state,
				gameParams: action.payload,
			};

		case 'ON_TIMER_STOP':
			return {
				...state,
				roundPoints: +calculatePoints(
					state.currentWords[state.currentDeckIndex].name.length,
					state.roundTime
				),
			};

		case 'ON_TIMER_TICK':
			return {
				...state,
				roundTime: state.roundTime + 1,
				letterPointsTime: state.letterPointsTime + 1,
				//used for calculating points too
				totalGameTime: state.totalGameTime + state.tick,
			};

		case 'ON_GAME_OVER':
			return {
				...state,

				openGameOverScreen: !state.openGameOverScreen,
			};

		case 'ON_GAME_END':
			return {
				...state,
				...INITIAL_STATE,
			};

		case 'ON_ROUND_START':
			return {
				...state,
				currentWordLetters: createCurrentWordLetters(
					state.currentWords[state.currentDeckIndex + 1]
				),

				openRoundBreakdown: !state.openRoundBreakdown,
				openGameOverScreen: false,
				roundPoints: 0,
				roundTime: 0,
				currentDeckIndex: state.currentDeckIndex + 1,
				correctCounter: 0,
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
				gameType: action.payload,
			};

		case 'ON_LETTER_DROP':
			const onDropVars = checkIfLetterIsCorrect(
				action.payload,
				state.currentWordLetters,
				state.letterPointsTime
			);

			if (onDropVars.correctCounter === 0) {
				return {
					...state,
				};
			}
			return {
				...state,
				totalGamePoints:
					state.totalGamePoints + onDropVars.letterPoints,

				correctCounter:
					state.correctCounter + onDropVars.correctCounter,
				letterPointsTime: 0
			};

		default:
			return state;
	}
};

export default phonicsGameReducer;
