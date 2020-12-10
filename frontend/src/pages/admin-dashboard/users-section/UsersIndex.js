import React, { Fragment } from 'react';
import UsersList from './UsersList';
import AddUser from './AddUser';
import EditUser from './EditUser';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

const UsersIndex = () => {
	const { path } = useRouteMatch();

	return (
		<Fragment>
			<div className="ui tabular menu"></div>
			<Switch>
				<Route exact path={`${path}`}>
					<UsersList />
				</Route>
				<Route exact path={`${path}/add`}>
					<AddUser />
				</Route>
				<Route
					
					path={`${path}/edit/:editUserId`}
					render={match => <EditUser {...match} />}
				/>
			</Switch>
		</Fragment>
	);
};

export default UsersIndex
