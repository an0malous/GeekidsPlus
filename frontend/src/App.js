import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import FlashCardsPage from './pages/flash-cards/flash-cards.page';
import Navbar from './Navbar';
import PhonicsGamePage from './pages/phonics-game-new/phonics-game.page';
import { Landing } from './pages/landing/Landing';
import Register from './pages/register/Register';
import Login from './pages/login/login';
import api from './api';
import RenderDashboard from './HOC/RenderDashboard';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/userActions';

const App = ({ getCurrentUser, user: { username, loggedIn, role }} ) => {
	useEffect(() => {
		console.log("App component useEffect Ran")
		const getUser = async () => {
			try {
				const res = await api.user();
				const {
					role,
					user: { username },
				} = res.data;
				getCurrentUser({ loggedIn: true, username, role });
			} catch (err) {
				console.log(err);
			}
		};
		getUser();
	}, []);

	return (
		<div>
			<Navbar />

			<Switch>
				<Route exact path="/register" exact component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/phonics" component={PhonicsGamePage} />
				<Route exact path="/flashcards" component={FlashCardsPage} />
				<Route
					path="/"
					render={() =>
						loggedIn ? <RenderDashboard /> : <Landing />
					}
				/>
			</Switch>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	getCurrentUser: (user) => dispatch(getCurrentUser(user)),
});

const mapStateToProps = (state) => ({
	user: state.userReducer.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
