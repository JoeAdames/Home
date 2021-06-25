import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

const Profile = () => {
	const [state, setState] = useState({});
	useEffect(() => {
		const getMe = async () => {
			const res = await fetch(
				`https://api.github.com/users/JoeAdames?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			const data = await res.json();
			console.log(data);
			setState(data);
		};
		getMe();
	}, []);
	return (
		<nav className='navbar'>
			<div className='card' style={{ width: '300px' }}>
				<img
					src={state.avatar_url}
					className='round-img'
					alt=''
					style={{ width: '100px' }}
				/>

				<h1>{state.name}</h1>
				<p>{state.bio}</p>
				<ul>
					<li>
						<a
							href={`Twitter.com/${state.twitter_username}`}
							target='_blank'
							rel='noreferrer'
						>
							Twitter
						</a>
					</li>
					<li>
						<a
							href={`Twitter.com/${state.twitter_username}`}
							target='_blank'
							rel='noreferrer'
						>
							Blog
						</a>
					</li>
					<li>
						<a
							href={`Twitter.com/${state.twitter_username}`}
							target='_blank'
							rel='noreferrer'
						>
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Profile;
