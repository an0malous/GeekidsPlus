import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import PhonicsGamePage from '../../pages/spelling/phonics-game.page';
import LandingPage from '../../pages/landing/Landing';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Dashboard from '../../pages/dashboard';
import Phonics from '../../pages/phonics/';

library.add(fas);

const App = () => (
	<div>
	<div style={{ position: "fixed", zIndex: "-1", width: "100%", height: "100vh", background: 'rgba(000, 000, 000, 0.15)'}}></div>
	<div>
		
		<Navbar />
		
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route exact path="/dashboard" component={Dashboard} />
			<Route exact path="/phonics" component={Phonics} />
			<Route exact path="/spelling" component={PhonicsGamePage} />
		</Switch>
		
	</div>
	</div>
);

export default App;
