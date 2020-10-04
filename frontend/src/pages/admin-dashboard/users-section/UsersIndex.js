import React, { Fragment } from 'react';
import UsersList from './UsersList'
import AddUser from './AddUser';
import EditUser from './EditUser';
import { Switch, Route } from "react-router-dom";
import { Tabbar } from '../../../components/admin-dashboard/Tabbar'

export class UsersIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Fragment>
            <div className="ui tabular menu">
            <Tabbar base="/admin/users/" classNames="item" tabs={[{name: "Manage", route: ''}, {name: "Add", route: "add"}]} />
            </div>
            <Switch>
            
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
            </Switch>
            </Fragment>
        )
    }
}

