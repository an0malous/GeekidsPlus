
const INITIAL_STATE = {
   english: true
};

const languageDisplayeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case `ON_JP_CLICK`:
			return {
				...state,
				english: false,
			};

		case 'ON_ENGLISH_CLICK':
			return {
				...state,
				english: true,
			};

		default:
			return state;
	}
};

export default languageDisplayeReducer;
