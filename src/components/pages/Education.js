import React from 'react';
import School from '../me/School.js';

const Education = () => {
	return (
		<ul>
			<School
				name={'Rutgers University, New Brunswick '}
				study={'Full Stack Web Development'}
				info={
					'12-week high-intensity boot camp covering the MERN stack, End to end coverage of Javascript and Stack integration, Worked in developer teams building projects, Ran live demos of team projects for interested companies'
				}
			/>
			<School
				name={'Modern Javascript From The Beginning, Udemy'}
				study={'ES+ Javscript'}
				info={
					'Basics & Fundamentals: Datatypes, let & const variables, functions, conditionals, loops, object literals, arrays, etc, DOM Manipulation: Selectors, traversing the DOM, show/hide, creating & removing elements, event listeners, OOP: ES5 prototypes, inheritance, ES2015 classes & sub-classes, constructors, Async JS: Ajax & XHR, Fetch API, callbacks, promises, async / await, ES2015+: Arrow functions, template strings, generators, iterators, maps & sets, symbols & more, JavaScript Patterns: Module, Factory, State, Observer, Mediator, Singleton, Other: Local & session storage, regular expressions, try/catch error handling'
				}
			/>
		</ul>
	);
};
export default Education;
