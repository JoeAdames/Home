import React, { useContext, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import GoogleContext from '../../context/google/googleContext';
import Job from './Job';
// import { Link } from 'react-router-dom';

// data.map((job) => <Job job={job} key={job.id} />)

const Jobs = () => {
	const googleContext = useContext(GoogleContext);
	const { data, loading, getData } = googleContext;
	useEffect(() => {
		getData();
		// eslint-disable-next-line
	}, []);
	console.log(data);
	console.log();
	if (loading) return <Spinner />;
	return <div>test</div>;
};

export default Jobs;
