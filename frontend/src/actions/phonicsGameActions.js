import axios from 'axios';

export const getCurrentWord = (currentWord) => ({
    type: 'GET_CURRENT_WORD',
    payload: currentWord
});

export const getCurrentDeckIndex = () => ({
    type: 'GET_CURRENT_DECK_INDEX'
});

export const fetchCurrentWordsStart =()=> ({
    type: 'FETCH_CURRENT_WORDS_START'
});

export const fetchCurrentWordsSuccess = (currentWords) => ({
    type: 'FETCH_CURRENT_WORDS_SUCCESS',
    payload: currentWords,
});

export const onRoundStart = () => ({
    type: 'ON_ROUND_START'
});

export const onRoundComplete = () => ({
    type: 'ON_ROUND_COMPLETE'
});

export const stopTimer = () => ({
        type: 'ON_TIMER_TIMER'
});

export const startTimer = () => ({
    type: 'ON_START_TIMER'
});

export const fetchCurrentWordsFailure = errorMessage => ({
    type: 'FETCH_CURRENT_WORDS_FAILURE',
    payload: errorMessage
})

export const onTimerTick = () => ({
    type: 'ON_TIMER_TICK'
});

export const fetchCurrentWordsAsync = () => {
    return async (dispatch)=> {
    
        dispatch(fetchCurrentWordsStart());
        try {
       const res = await axios.get("http://localhost:3000/admin/cards")
           console.log(res.data);
           dispatch(fetchCurrentWordsSuccess(res.data))
        } catch(error){
            dispatch(fetchCurrentWordsFailure(`You fucked up ${error}`))
        }

    };
}
let timer = null
export const startTimerAsync = () => {
    return dispatch => {
        dispatch(startTimer());
        timer = setInterval(()=>dispatch(onTimerTick()), 1000)
        dispatch(onTimerTick());
    };
};

export const stopTimerAsync = (timer) => {
    return dispatch =>{
    dispatch(startTimer());
    clearInterval(timer);
    };

};