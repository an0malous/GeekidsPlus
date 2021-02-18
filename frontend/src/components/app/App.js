import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import PhonicsGamePage from '../../pages/phonics/phonics-game.page';
import LandingPage from '../../pages/landing/Landing';

const App = () => (
		<div>
			<Navbar />

			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/phonics" component={PhonicsGamePage} />
			</Switch>
		</div>
	);

export default App;
