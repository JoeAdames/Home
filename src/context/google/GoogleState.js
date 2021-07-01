import React, { useReducer } from 'react';
import GoogleContext from './googleContext';
import GoogleReducer from './googleReducer';
// eslint-disable-next-line

//https://spreadsheets.google.com/feeds/cells/1qOJdDrKFYLmfW9IaVybo27Kv7dTWql527KP7u_z6Op0/1/public/full?alt=json
import { GET_DATA, SET_LOADING } from '../types';

const GoogleState = (props) => {
	const initialState = {
		data: {},
		loading: false,
	};

	const [state, dispatch] = useReducer(GoogleReducer, initialState);

	//getData
	const getData = async () => {
		setLoading();
		const res = await fetch(
			`https://spreadsheets.google.com/feeds/cells/1qOJdDrKFYLmfW9IaVybo27Kv7dTWql527KP7u_z6Op0/1/public/full?alt=json`
		);
		const data = await res.json();
		dispatch({
			type: GET_DATA,
			payload: data.feed.entry,
		});
	};

	//setloading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GoogleContext.Provider
			value={{
				data: state.data,
				loading: state.loading,
				getData,
			}}
		>
			{props.children}
		</GoogleContext.Provider>
	);
};

export default GoogleState;
