
const INITIAL_STATE = {
   english: true
};

const languageDisplayReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case `ON_TOGGLE_CLICK`:
			return {
				...state,
				english: !state.english,
			};

		default:
			return state;
	}
};

export default languageDisplayReducer;
