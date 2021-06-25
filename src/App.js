import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/layout/Profile';
import Home from './components/pages/Home';
import Repositories from './components/me/Repositories';
import Projects from './components/pages/Projects';
import NotFound from './components/pages/NotFound';
// import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
	return (
		<Router>
			<div className='app'>
				<Profile />
				<Repositories />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/projects' component={Projects} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
