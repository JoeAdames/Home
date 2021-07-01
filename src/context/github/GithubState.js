import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
// eslint-disable-next-line
import { GET_USER, GET_REPOSITORIES, SET_LOADING } from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
	githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
	githubClientSecret = process.env.REACT_APP_GITHuB_CLIENT_SECRET;
} else {
	githubClientId = process.env.GITHUB_CLIENT_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
	const initialState = {
		user: {},
		repositories: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	//getMe
	const getUser = async () => {
		setLoading();
		const res = await fetch(
			`https://api.github.com/users/joeadames?client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);
		const data = await res.json();
		dispatch({
			type: GET_USER,
			payload: data,
		});
	};

	//get repositories
	const getRepositories = async () => {
		setLoading();
		const res = await fetch(
			`https://api.github.com/users/joeadames/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);
		const data = await res.json();
		console.log(data);
		dispatch({
			type: GET_REPOSITORIES,
			payload: data,
		});
	};

	//setloading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				me: state.user,
				repositories: state.repositories,
				loading: state.loading,
				getUser,
				getRepositories,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
