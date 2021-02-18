export const getCurrentWord = () => ({
    type: 'GET_CURRENT_WORD'
});


export const getCurrentDeckIndex = () => ({
    type: 'GET_CURRENT_DECK_INDEX'
});

export const fetchCurrentWords =()=> ({
    type: 'FETCH_WORDS'
});

export const setCurrentWords = () => ({
    type: 'SET_CURRENT_WORDS'
});

export const onRoundStart = () => ({
    type: 'ON_ROUND_START'
});

export const onGameStart = () => ({
    type: 'ON_GAME_START'
});

export const onRoundComplete = () => ({
    type: 'ON_ROUND_COMPLETE'
});

export const onGameEnd = () => ({
    type: 'ON_GAME_END'
});

export const onTimerStop = () => ({
    type: 'ON_TIMER_STOP'
});

export const onCorrectLetter = () => ({
    type: 'ON_CORRECT_LETTER'
});

export const onTimerStart = () => ({
    type: 'ON_TIMER_START'
});

export const onTimerTick = () => ({
    type: 'ON_TIMER_TICK'
});

export const getGameParams = (gameInfo) => ({
    type: 'GET_GAME_PARAMS',
    payload: gameInfo
});


