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
    payload: currentWords

});

export const fetchCurrentWordsFailure = errorMessage => ({
    type: 'FETCH_CURRENT_WORDS_FAILURE',
    payload: errorMessage
})

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