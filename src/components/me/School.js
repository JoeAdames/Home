import React from 'react';

const School = ({ name, study, info }) => {
	return (
		<li>
			<h1>{name}</h1>
			<h2>{study}</h2>
			<p>{info}</p>
		</li>
	);
};

export default School;
