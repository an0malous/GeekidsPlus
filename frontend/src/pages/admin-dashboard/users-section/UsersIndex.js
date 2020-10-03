import React from 'react';
import UsersList from './UsersList'
import AddUser from './AddUser';
import EditUser from './EditUser';
import { Switch, Route } from "react-router-dom";

export class UsersIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <switch>
                <Route exact path="/admin/users">
                    <UsersList />
                </Route>
                <Route exact path="/admin/users/add">
                    <AddUser />
                </Route>
                <Route
                    exact
                    path="/admin/users/edit/:id"
                    render={({ match }) => <EditUser id={match.params.id} />}
                />
            </switch>
        )
    }
}

