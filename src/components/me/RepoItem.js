import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
	return (
		<div className='text-center'>
			<a
				href={repo.html_url}
				target='_blank'
				rel='noreferrer'
				className='lead text-success'
			>
				{repo.name}
			</a>
		</div>
	);
};

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};
export default RepoItem;
