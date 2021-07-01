import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import GoogleState from './context/google/GoogleState';
import './App.css';

const App = () => {
	return (
		<GithubState>
			<GoogleState>
				<Router>
					<div className='app'>
						<div className='container'>
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/projects' component={Projects} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</GoogleState>
		</GithubState>
	);
};

export default App;
