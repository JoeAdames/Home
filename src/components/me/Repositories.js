import React, { useEffect, useState } from 'react';
import RepoItem from './RepoItem';
// import { Link } from 'react-router-dom';

// state.forEach((repo) => <RepoItem repo={repo} key={repo.id} />)

const Repositories = () => {
	const [state, setState] = useState({});
	useEffect(() => {
		const getRepositories = async (username) => {
			const res = await fetch(
				`https://api.github.com/users/JoeAdames/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			const data = await res.json();
			console.log(data);
			setState(data);
		};
		getRepositories();
	}, []);
	return <div>trying</div>;
};

export default Repositories;
