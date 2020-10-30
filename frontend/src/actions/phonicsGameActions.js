import axios from 'axios';

export const getCurrentWord = () => ({
    type: 'GET_CURRENT_WORD'
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

export const onTimerStop = () => ({
        type: 'ON_TIMER_STOP'
});

export const onTimerStart = () => ({
    type: 'ON_TIMER_START'
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
};

let timer = null
export const startTimerAsync = () => {
    return dispatch => {
        dispatch(onTimerStart());
        timer = setInterval(()=>dispatch(onTimerTick()), 1000)
        dispatch(onTimerTick());
    };
};

export const stopTimerAsync = () => {
    return dispatch =>{
    dispatch(()=>onTimerStop());
    clearInterval(timer);
    };

};