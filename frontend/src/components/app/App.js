import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import FlashCardsPage from './pages/flash-cards/flash-cards.page';
import Navbar from './Navbar';
import PhonicsGamePage from '../../pages/phonics-game-new/phonics-game.page';
import { LandingPage } from '../../pages/landing/Landing';

const App = () => (
		<div>
			<Navbar />

			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/phonics" component={PhonicsGamePage} />
				<Route exact path="/flashcards" component={FlashCardsPage} />
			</Switch>
		</div>
	);

export default App;
