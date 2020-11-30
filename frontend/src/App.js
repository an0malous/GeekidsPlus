import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import FlashCardsPage from './pages/flash-cards/flash-cards.page';
import Navbar from './Navbar';
import PhonicsGamePage from './pages/phonics-game-new/phonics-game.page';
import { Landing } from './pages/landing/Landing';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import api from './api';
import RenderDashboard from './HOC/RenderDashboard';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/userActions';

const App = ({ getCurrentUser, user: { loggedIn, role } }) => {
	useEffect(() => {
		const getUser = async ()=> {
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
	}
	getUser()
	}, []);

	return (
		<div>
			<Navbar />
			<Route path="/" render={(props)=> loggedIn ? <RenderDashboard {...props} /> : <Landing {...props} />} />
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

const mapStateToProps = state => ({
	user: state.userReducer.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
