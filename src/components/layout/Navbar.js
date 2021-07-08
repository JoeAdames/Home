import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	let textColor = '#1e1b18';
	const setSelected = () => {
		//doesn't work yet
		textColor = '#fffaff';
	};

	return (
		<nav className='navbar'>
			<h1>
				<Link onClick={setSelected} to='/' style={{ color: `${textColor}` }}>
					Home
				</Link>
				<Link to='/education' style={{ color: `${textColor}` }}>
					Education
				</Link>
				<Link to='/experience' style={{ color: `${textColor}` }}>
					Experience
				</Link>
			</h1>
			<ul>
				<li>
					<a
						href={'https://www.linkedin.com/in/josephadames/'}
						target='_blank'
						rel='noreferrer'
						style={{ color: `${textColor}` }}
					>
						Linkedin
					</a>
				</li>
				<li>
					<a
						href={'https://github.com/JoeAdames'}
						target='_blank'
						rel='noreferrer'
						style={{ color: `${textColor}` }}
					>
						Github
					</a>
				</li>
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github',
};

export default Navbar;
