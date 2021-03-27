import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import PhonicsGamePage from '../../pages/phonics/phonics-game.page';
import LandingPage from '../../pages/landing/Landing';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Home from '../../pages/home/home.page';
import About from '../../pages/about/about.page';

library.add(fas);

const App = () => (
	<div>
		<Navbar />
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route exact path="/home" component={Home} />
			<Route exact path="/phonics" component={PhonicsGamePage} />
			<Route exact path="/concept" component={About} />
		</Switch>
	</div>
);

export default App;
