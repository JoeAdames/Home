// import React, { useContext, useEffect } from 'react';
// import Spinner from '../layout/Spinner';
// import GoogleContext from '../../context/google/googleContext';
import Job from './Job';
// import { Link } from 'react-router-dom';

// data.map((job) => <Job job={job} key={job.id} />)

const Jobs = () => {
	// const googleContext = useContext(GoogleContext);
	// const { data, loading, getData } = googleContext;
	// useEffect(() => {
	// 	getData();
	// 	// eslint-disable-next-line
	// }, []);
	// console.log(data);
	// if (loading) {
	// 	return <Spinner />;
	// } else {
	return (
		<ul className='grid-2'>
			<div
				className='bg-dark'
				style={{ 'border-radius': '30px', padding: '20px' }}
			>
				<Job
					company={'WeatherWorks Inc'}
					title={'Frontend Developer'}
					duties={
						'GIT/JIRA, Building VueJS functional components, Adding to previously Built applications in VanillaJs/JQuery, Quality Assurance(bug fixing) in both previously built apps(JQuery/VanillaJS) and SPA builds, Working with Manager & Team lead using Pull requests to build better coding habits and write cleaner code, End-to-end development in both VueJS and VanillaJS, Designed & built internal apps based on different teams, needs, Worked with several end users to design specific tooling in Javascript for support in Meteorology'
					}
				/>
			</div>
			<div
				className='bg-dark'
				style={{ 'border-radius': '30px', padding: '20px' }}
			>
				<Job
					company={'The Wallstreet Transcript & Wallstreet Webcasting'}
					title={'Frontend Developer/Tech'}
					duties={
						'Created weekly corporate casting agendas for conferences using Javascript, Adding to previously Built applications in VanillaJs, Built Custom templating with Vanillajs for specific events for onsight & online dashboards, Designed and built an internal ecosystem of tools used by our teams under one domain with ReactJs using company owned API’s, Worked with a team to extract micro-frontends of an outdated application, All of this utilizing CI-based designs through HTML & CSS'
					}
				/>
			</div>
			<div
				className='bg-dark'
				style={{ 'border-radius': '30px', padding: '20px' }}
			>
				<Job
					company={'Selective Insurance'}
					title={'Advanced Analytics & Applications Co-op'}
					duties={
						'Creating written bug reports for team escalation, Worked with a backend data analysis team in SQL, Provided QA testing using Dev & Live environment data,Wrote SQL queries comparing two databases for matching data to help support bug prevention, Reported daily to a team within an AGILE environment'
					}
				/>
			</div>
		</ul>
	);
	// }
};

export default Jobs;
