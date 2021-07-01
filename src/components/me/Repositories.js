import React, { useContext, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import RepoItem from './RepoItem';
// import { Link } from 'react-router-dom';

// state.forEach((repo) => <RepoItem repo={repo} key={repo.id} />)''

const Repositories = () => {
	const githubContext = useContext(GithubContext);
	const { repositories, loading, getRepositories } = githubContext;
	useEffect(() => {
		getRepositories();
		// eslint-disable-next-line
	}, []);
	if (loading) return <Spinner />;
	return repositories.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

export default Repositories;
