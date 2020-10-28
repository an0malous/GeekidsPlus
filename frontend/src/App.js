import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'
import { PrivateRoute } from './components/PrivateRoute';
import { Navbar } from './Navbar';
import PhonicsGamePage from './pages/phonics-game-new/phonics-game.page';
import { Landing } from './pages/landing/Landing'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import AdminDashboard from './pages/admin-dashboard/AdminDashboard';
import auth from './auth';

export default class App extends React.Component {
  constructor(props){
    super(props)
    axios.defaults.withCredentials = true;
    
    this.state = {
      overlay: true,
      loggedIn: false,
      username: "",
      role: 0
  }
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount () {
    auth.isAuthenticated((data)=>{
      this.setState({loggedIn: true, username: data.user.username, role: data.role})
    })
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  
  render() {
    return (
     <div>
        <Navbar loggedIn={this.state.loggedIn} role={this.state.role} username={this.state.username} updateUser={this.updateUser} />
       
          <Route path="/" render={()=><Landing handleSetOverlay={this.handleSetOverlay}/>}exact component={Landing} />
          <Route exact path="/register" admin={this.state.role} exact component={Register} />
          <Route exact path="/login" render={()=><Login updateUser={this.updateUser} />} />
          <Route path="/phonics" component={PhonicsGamePage} />
          <PrivateRoute path="/admin" component={AdminDashboard} role={this.state.role} loggedIn={this.state.loggedIn} accessLevel={4} />
       
        </div>
      
    );
    }
  }
