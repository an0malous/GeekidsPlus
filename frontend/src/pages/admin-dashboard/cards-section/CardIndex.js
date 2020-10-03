import React from 'react';
import CardList from './CardList';
import EditCard from './EditCard';
import AddCard from './AddCard'
import { Switch, Route } from "react-router-dom";

export class CardsIndex extends React.Component {
    constructor(props){
        super(props)

    }

    render (){
        return (
            <Switch>
                <Route exact path="/admin/cards">
                    <CardList />
                </Route>
                <Route exact path="/admin/cards/add">
                    <AddCard />
                </Route>
                <Route
                    exact
                    path="/admin/cards/edit/:id"
                    render={({ match }) => <EditCard id={match.params.id} />}
                />
            </Switch>
        )
    }
}
             