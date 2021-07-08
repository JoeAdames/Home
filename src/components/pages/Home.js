import React from 'react';
import Profile from '../layout/Profile';
import Projects from './Projects';

const Home = () => {
	return (
		<div>
			<div className='m-3'>
				<Profile />
			</div>
			<div className='text-center m-3'>
				<h1>Some projects on Github</h1>
				<Projects />
			</div>
		</div>
	);
};
export default Home;
