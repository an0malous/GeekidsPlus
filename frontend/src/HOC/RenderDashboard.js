import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import AdminDashboard from '../pages/admin-dashboard/AdminDashboard';
import UserDashboard from '../components/user-dashboard/user-dashboard.component';
import { connect } from 'react-redux';

const RenderDashboard = ({ user: { loggedIn, role }, ...rest }) => {
  let history = useHistory();
  history.push('/dashboard')
	return (
		<Route
			path="/dashboard"
			{...rest}
			render={() => {
				return loggedIn && role >= 3 ? (
					<AdminDashboard {...rest} />
				) : (
					<UserDashboard {...rest} />
				);
			}}
		/>
	);
};

const mapStateToProps = (state) => ({
	user: state.userReducer.currentUser,
});
export default connect(mapStateToProps)(RenderDashboard);
