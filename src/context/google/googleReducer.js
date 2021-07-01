import { GET_DATA, SET_LOADING } from '../types';
// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case GET_DATA:
			return {
				...state,
				data: action.payload,
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
