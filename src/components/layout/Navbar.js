import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<h1>
				<Link to='/'>Home</Link>
				<Link to='/education'>Education</Link>
				<Link to='/experience'>Experience</Link>
				<Link to='/projects'>Projects</Link>
			</h1>
			<ul>
				<li>
					<a
						href={'https://www.linkedin.com/in/josephadames/'}
						target='_blank'
						rel='noreferrer'
					>
						Linkedin
					</a>
				</li>
				<li>
					<a
						href={'https://github.com/JoeAdames'}
						target='_blank'
						rel='noreferrer'
					>
						Github
					</a>
				</li>
				{/* <li>
					<a href={'blank'} target='_blank' rel='noreferrer'>
						LinkedIn
					</a>
				</li> */}
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github',
};

export default Navbar;
