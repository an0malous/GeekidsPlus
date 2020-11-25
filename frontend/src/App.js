import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import FlashCardsPage from './pages/flash-cards/flash-cards.page';
import Navbar from './Navbar';
import PhonicsGamePage from './pages/phonics-game-new/phonics-game.page';
import { Landing } from './pages/landing/Landing';
import ProtectedRoute from './HOC/ProtectedRoute';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import AdminDashboard from './pages/admin-dashboard/AdminDashboard';
import api from './api';
import RenderDashboard from './HOC/RenderDashboard';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/userActions';

const App = ({ getCurrentUser }) => {
	useEffect(async () => {
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
	}, []);

	return (
		<div>
			<Navbar />
			<Route path="/" exact component={Landing} />
			<Route exact path="/register" exact component={Register} />
			<Route exact path="/login" component={Login} />
			<Route path="/phonics" component={PhonicsGamePage} />
			<Route path="/flashcards" component={FlashCardsPage} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	getCurrentUser: (user) => dispatch(getCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
