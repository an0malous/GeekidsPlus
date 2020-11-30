import React from 'react';
import CardList from './CardList';
import EditCard from './EditCard';
import AddCard from './AddCard'
import { Switch, Route, withRouter, useRouteMatch } from "react-router-dom";
import {Fragment} from 'react'

class CardsIndex extends React.Component {
    constructor({ props, match: { pathname } }){
        super(props)
        this.pathname = pathname

    }

    render (){
      console.log(this.props.location)
        return (
            <Fragment>
            <div className="ui tabular menu">
               
               </div>
                <Switch>
                    <Route path="/home/cards">
                        <CardList />
                    </Route>
                    <Route exact path={`${this.pathname}/add`} >
                        <AddCard />
                    </Route>
                    <Route
                        exact
                        path={`${this.pathname}/edit/:id`}
                        render={({ match }) => <EditCard id={match.params.id} />}
                    />
                </Switch>
            </Fragment>
        )
    }
}

export default withRouter(CardsIndex)
             