import React, { Fragment } from 'react';
import UsersList from './UsersList';
import AddUser from './AddUser';
import EditUser from './EditUser';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

const UsersIndex = () => {
	const { path, url } = useRouteMatch();
	const { id } = useParams();
	return (
		<Fragment>
			<div className="ui tabular menu"></div>
			<Switch>
				<Route exact path="/home/users">
					<UsersList />
				</Route>
				<Route exact path="/home/users/add">
					<AddUser />
				</Route>
				<Route
					
					path={`${path}/edit/:id`}
					render={({ id }) => <EditUser id={id} />}
				/>
			</Switch>
		</Fragment>
	);
};

export default UsersIndex
