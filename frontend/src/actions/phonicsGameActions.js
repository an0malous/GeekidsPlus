import axios from 'axios';

export const getCurrentWord = () => ({
    type: 'GET_CURRENT_WORD',
    payload: currentWord
});

export const getCurrentDeckIndex = () => ({
    type: 'GET_CURRENT_DECK_INDEX',
    payload: currentDeckIndex
});

export const fetchCurrentWordsStart =()=> ({
    type: 'FETCH_CURRENT_WORDS_START'
});

export const fetchCurrentWordsSuccess = () => ({
    type: 'FETCH_CURRENT_WORDS_SUCCESS',
    payload: currentWords

});

export const fetchCurrentWordsFailture = errorMessage => ({
    type: 'FETCH_CURRENT_WORDS_ERROR',
    payload: errorMessage
})

export const fetchCurrentWordsAysnc = async () => {
    return dispatch => {
        try {
        dispatch(fetchCurrentWordsStart());
        const res = await axios.get("http://localhost:3000/admin/cards");
        const currentWords = res.data;
        dispatch(fetchCurrentWordsSuccess(currentWords));
        } catch (error){
            fetchCurrentWordsFailture(`Sorry couldn't fetch due to ${error}`);
        };
    };
};