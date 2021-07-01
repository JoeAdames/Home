import React, { useContext, useEffect } from 'react';
import Spinner from './Spinner';
import GithubContext from '../../context/github/githubContext';
// import { Link } from 'react-router-dom';

const Profile = () => {
	const githubContext = useContext(GithubContext);
	const { me, loading, getUser } = githubContext;

	useEffect(() => {
		getUser();
		// eslint-disable-next-line
	}, []);

	//i have no iea how this is working... it doesnt make sense in the context im user, but here i am me, but if i use the user variable from state.. this breaks
	const { avatar_url, name, bio, twitter_username } = me;

	if (loading) return <Spinner />;

	return (
		<nav className='navbar'>
			<div className='card' style={{ width: '300px' }}>
				<img
					src={avatar_url}
					className='round-img'
					alt=''
					style={{ width: '100px' }}
				/>

				<h1>{name}</h1>
				<p>{bio}</p>
				<ul>
					<li>
						<a
							href={`Twitter.com/${twitter_username}`}
							target='_blank'
							rel='noreferrer'
						>
							Twitter
						</a>
					</li>
					<li>
						<a
							href={`Twitter.com/${twitter_username}`}
							target='_blank'
							rel='noreferrer'
						>
							Blog
						</a>
					</li>
					<li>
						<a
							href={`Twitter.com/${twitter_username}`}
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
