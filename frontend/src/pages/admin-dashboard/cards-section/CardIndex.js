import React from 'react';
import CardList from './CardList';
import EditCard from './EditCard';
import AddCard from './AddCard'
import { Switch, Route, withRouter, useRouteMatch, useParams } from "react-router-dom";
import {Fragment} from 'react'

const CardsIndex = (props) => {
    const { path }  = useRouteMatch();
    let { id } = useParams()
    console.log(path)
    console.log({id})
        return (
            <Fragment>
            <div className="ui tabular menu">
               
               </div>
                <Switch>
                <Route exact path="/home/cards">
                        <CardList />
                    </Route>
                    <Route exact path={`${path}/add`} >
                        <AddCard />
                    </Route>
                    <Route
                        exact
                        path={`${path}/edit/${id}`}
                        render={(id) => <EditCard id={id} />}
                    />
                </Switch>
            </Fragment>
        )
    }

export default withRouter(CardsIndex)
             