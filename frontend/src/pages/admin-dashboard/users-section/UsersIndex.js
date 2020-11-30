import React, { Fragment } from 'react';
import UsersList from './UsersList'
import AddUser from './AddUser';
import EditUser from './EditUser';
import { Switch, Route } from "react-router-dom";
import Tab from '../../../components/admin-dashboard/tab'

export class UsersIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Fragment>
            <div className="ui tabular menu">
           
            </div>
            <Switch>
            
                <Route exact path="/users">
                    <UsersList />
                </Route>
                <Route exact path="/users/add">
                    <AddUser />
                </Route>
                <Route
                    exact
                    path="/users/edit/:id"
                    render={({ match }) => <EditUser id={match.params.id} />}
                />
            </Switch>
            </Fragment>
        )
    }
}

