import React from 'react';
import CardList from './CardList';
import EditCard from './EditCard';
import AddCard from './AddCard'
import { Switch, Route, withRouter, useRouteMatch, useParams } from "react-router-dom";
import {Fragment} from 'react'

const CardsIndex = (props) => {
    const { path }  = useRouteMatch();
    console.log(path)
        return (
            <Fragment>
            <div className="ui tabular menu">
               
               </div>
                <Switch>
                <Route exact path={`${path}`}>
                        <CardList />
                    </Route>
                    <Route exact path={`${path}/add`} >
                        <AddCard />
                    </Route>
                    <Route
                        exact
                        path={`${path}/edit/:editCardId`}
                        render={match => <EditCard {...match}/>}
                    />
                </Switch>
            </Fragment>
        )
    }

export default withRouter(CardsIndex)
             