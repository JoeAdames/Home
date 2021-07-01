import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ job }) => {
	return <div dangerouslySetInnerHTML={{ __html: job }}></div>;
};
Job.propTypes = {
	job: PropTypes.object.isRequired,
};
export default Job;
