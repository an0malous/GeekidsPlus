const INITIAL_STATE = {
    currentUser: {loggedIn: false, username: '', role: ''}
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'GET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            
            }
            
        default: return state;
    }
}

export default userReducer;