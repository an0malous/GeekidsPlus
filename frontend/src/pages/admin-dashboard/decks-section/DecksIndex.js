import React from 'react';
import AddDeck from './AddDeck';
import { Switch, Route } from "react-router-dom";

export class DecksIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Route exact path="/admin/decks/add">
                <AddDeck />
            </Route>
        )
    }
}