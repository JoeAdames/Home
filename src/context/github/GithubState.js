import React, { useReducer } from 'react';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import { GET_ME, GET_REPOSITORIES, SET_LOADING } from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
	githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
	githubClientId = process.env.GITHUB_CLIENT_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
	const initialState = {
		me: {},
		// repositories: [],
		// loading: false,
	};

	const { state, dispatch } = useReducer(GithubReducer, initialState);

	const setLoading = () => dispatch({ type: SET_LOADING });

	//Get me
	const getMe = async () => {
		setLoading();
		const res = await fetch(
			`https://api.github.com/users/JoeAdames?client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);
		const data = await res.json();
		console.log(data);
		dispatch({
			type: GET_ME,
			payload: data,
		});
	};

	return (
		<GithubContext.Provider
			value={{
				me: state.me,
				// repositories: state.repositories,
				// loading: state.loading,
				getMe,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
