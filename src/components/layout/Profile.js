import React, { useContext, useEffect } from 'react';
import Spinner from './Spinner';
import GithubContext from '../../context/github/githubContext';
import BG from '../../images/maybe.jpg';
// import { Link } from 'react-router-dom';

const Profile = () => {
	const githubContext = useContext(GithubContext);
	const { me, loading, getUser } = githubContext;

	useEffect(() => {
		getUser();
		// eslint-disable-next-line
	}, []);

	//i have no iea how this is working... it doesnt make sense in the context im user, but here i am me, but if i use the user variable from state.. this breaks
	const { avatar_url, name, bio } = me;

	if (loading) return <Spinner />;

	return (
		<div style={{ padding: '10px' }}>
			<div>
				{/* <img
					src={avatar_url}
					className='round-img'
					alt=''
					style={{ width: '200px' }}
				/> */}
			</div>
			<div>
				<div className='x-large text-center'>{name}</div>
				<p className='lead text-center'>{bio}</p>
			</div>
			<div>
				<p className='text-center'>
					Currently seeking Frontend and Full stack opportunities
				</p>
			</div>
		</div>
	);
};

export default Profile;
