
const INITIAL_STATE = {
    currentWords: [],
    currentWord: '',
    isFetching: false,
    errorMessage: '',
    currentDeckIndex: 0,
    message: "hi"
}

const phonicsGameReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case 'GET_CURRENT_DECK_INDEX':
            return {
                ...state,
                currentDeckIndex: state.currentDeckIndex + 1
            };

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

        case 'FETCH_CURRENT_WORDS_FAILURE':
            return {
                ...state,
                errorMessage: action.payload
            };
        case 'TEST':
        return {
            ...state,
            message: "bye"
        }

        default: return state;
    };
};

export default phonicsGameReducer;