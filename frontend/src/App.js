import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'

import { Navbar } from './components/Navbar';
import Game from './Game'
import adminPanel from './components/AdminPanel';
import AddCard from './components/AddCard';
import EditCard from './components/EditCard'
import { Landing } from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
export default class App extends React.Component {
  constructor(){
    super()
    axios.defaults.withCredentials = true;
    
    this.state = {loggedIn: false, username: null, admin: false, overlay: false};
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleSetOverlay = this.handleSetOverlay.bind(this);

  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }
 
  handleLogout () {
    if(!this.state.username && !this.state.loggedIn){
      return window.location = ("/login")
    } else {
      axios.post('http://localhost:3000/user/logout')
      .then(()=>{
        console.log("log out complete")
        window.location = "/"
      })
    } 
  }

  getUser() {
    axios.get('http://localhost:3000/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        console.log(response.data.user)
        console.log("Admin or not " + response.data.admin)

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          admin: response.data.admin

        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null,
          admin: false
        })
      }
    })
  }

  handleSetOverlay = () => {
    console.log("inside set overlay")
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
        <Navbar loggedIn={this.state.loggedIn} admin={this.state.admin} username={this.state.username} handleLogout={this.handleLogout} />
        <div style={ this.state.overlay ? styles.overlay : null}>
        <Route path={"/"} admin={this.state.admin} updateUser={this.updateUser} exact component={Landing} />
        <Route exact path={"/register"} admin={this.state.admin} exact component={Register} />
        <Route exact path={"/login"} render={()=><Login updateUser={this.updateUser} />} />
        <Route exact path={"/phonics"} render={()=><Game handleSetOverlay={this.handleSetOverlay} /> } />
        <Route path={"/admin"} admin={this.state.admin} updateUser={this.updateUser} component={adminPanel} />
      </div>
      </div>
    );
  }
}
