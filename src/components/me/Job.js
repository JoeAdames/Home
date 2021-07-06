import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ company, title, duties }) => {
	return (
		<li>
			<h1>{company}</h1>
			<h2>{title}</h2>
			{duties}
		</li>
	);
};
Job.propTypes = {
	job: PropTypes.object.isRequired,
};
export default Job;
