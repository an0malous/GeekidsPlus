import React from 'react';
import CardList from './CardList';
import EditCard from './EditCard';
import AddCard from './AddCard'
import { Switch, Route } from "react-router-dom";
import Tab from '../../../components/admin-dashboard/tab'
import {Fragment} from 'react'

export class CardsIndex extends React.Component {
    constructor(props){
        super(props)

    }

    render (){
        return (
            <Fragment>
            <div className="ui tabular menu">
               
               </div>
                <Switch>
                    <Route exact path="/cards/">
                        <CardList />
                    </Route>
                    <Route exact path="/cards/add">
                        <AddCard />
                    </Route>
                    <Route
                        exact
                        path="/admin/cards/edit/:id"
                        render={({ match }) => <EditCard id={match.params.id} />}
                    />
                </Switch>
            </Fragment>
        )
    }
}
             