import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'
import { PrivateRoute } from './components/PrivateRoute';
import { Navbar } from './Navbar';
import Game from './pages/phonics-game/Game'
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
      overlay: false,
      loggedIn: false,
      username: "",
      role: 0
  }
    this.updateUser = this.updateUser.bind(this)
    this.handleSetOverlay = this.handleSetOverlay.bind(this);
  }

  componentDidMount () {
    auth.isAuthenticated((data)=>{
      this.setState({loggedIn: true, username: data.user.username, role: data.role})
    })
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  handleSetOverlay = () => {
    this.setState({overlay: !this.state.overlay})
  }
  
  render() {
    const styles = {
      overlay: {
        width: "100%",
        height: "calc(100vh - 30px)",
        background: "rgba(0, 0, 0, 0.8)"
      }
    }

    return (
      <div>
        <Navbar loggedIn={this.state.loggedIn} role={this.state.role} username={this.state.username} updateUser={this.updateUser} />
        <div style={ this.state.overlay ? styles.overlay : null}>
          <Route path="/" render={()=><Landing handleSetOverlay={this.handleSetOverlay}/>}exact component={Landing} />
          <Route exact path="/register" admin={this.state.role} exact component={Register} />
          <Route exact path="/login" render={()=><Login updateUser={this.updateUser} />} />
          <Route exact path="/phonics" render={()=><Game handleSetOverlay={this.handleSetOverlay} /> } />
          <PrivateRoute path="/admin" component={AdminDashboard} role={this.state.role} loggedIn={this.state.loggedIn} accessLevel={4} handleSetOverlay={this.handleSetOverlay} />
        </div>
      </div>
    );
  }
}