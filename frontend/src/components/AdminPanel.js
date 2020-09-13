import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Announcments from './admin.components/Announcments.admin';
import UserList from './admin.components/UserList.admin';
import CardList from './admin.components/CardList.admin';
import Scoreboard from './admin.components/Scoreboard.admin';
import EditCard from './admin.components/EditCard.admin';
import { Sidebar } from './admin.components/Sidebar'
import EditUser from './admin.components/EditUser.admin'
import AddCard from './admin.components/AddCard.admin';
import AddUser from './admin.components/AddUser.admin';
import { Tabbar } from './admin.components/Tabbar';

export default class AdminPanel extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount (){
        this.props.handleSetOverlay();
      };
    
    render(){
        
        return(
       
            <div style={{background: "rgba(255, 255, 255, 0.85)"}} className="ui center aligned container">
                <div className="ui grid">
                    <Sidebar />
                    <div class="twelve wide stretched column">
                        <div class="ui segment">
                  <Switch>
                            <Route exact path="/admin/cards" >
                                <Tabbar />
                                <CardList />
                            </Route>
                            <Route exact path="/admin/cards/add" >
                                <Tabbar />
                                <AddCard />
                            </Route>
                            <Route  exact path="/admin/cards/edit/:id" render={({match})=> <EditCard id={match.params.id} /> } />
                            <Route exact path="/admin/users"  >
                                <UserList />
                            </Route>
                            <Route exact path="/admin/users/add" >
                                <AddUser />
                            </Route>
                            <Route  exact path="/admin/users/edit/:id" render={({match})=> <EditUser id={match.params.id} /> } />
                            
                            <Route path="/admin/announcments"  >
                                <Announcments />
                            </Route>
                            <Route  path="/admin/scoreboard"  >
                                <Scoreboard /> 
                            </Route>
                           
                           
                            </Switch>
                   
                        </div>
                    </div>
                </div>
            </div>
          
        )
    }
} 