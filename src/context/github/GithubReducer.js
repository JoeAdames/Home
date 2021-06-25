import { GET_ME, GET_REPOSITORIES, SET_LOADING } from '../types';
// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case GET_ME:
			return {
				me: action.payload,
				loading: false,
			};
		case GET_REPOSITORIES:
			return {
				repositories: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
