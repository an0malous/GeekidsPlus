import React from 'react';
import api from '../../api';
import { Redirect } from 'react-router-dom';
import { getCurrentUser } from '../../actions/userActions';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {username: '', password: '', redirectTo: null};
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
   
    }
  
    onSubmit = async event =>{
        event.preventDefault()
        const { username, password } = this.state;
        if(username && password) {
            
            try {
                const payload = {username: this.state.username, password: this.state.password} ;
                const response = await api.login(payload);
                const { username, role } = response.data;
                console.log(response)
                  if(username, role){
                    this.props.getCurrentUser({ loggedIn: true, username: username, role: role })
                    this.setState({redirectTo: "/"})
                } else {
            console.log("No username or password")
            }
        }catch(err){
            console.log(err)
          }
        } else {console.log("No username or password")}
        
    };
    
    onChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        return (
            this.state.redirectTo ? (<Redirect to="/" />) : (
            <div className="ui container aligned center">
                <form className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input onChange={this.onChange} type="text" name="username" placeholder="username" />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input onChange={this.onChange} type="password" name="password" placeholder="password" />
                    </div>
                    <button className="ui button" type="submit" onClick={this.onSubmit}>Login</button>
               </form>
            </div>
            )
        )
    }
};

const mapDispatchToProps = dispatch => ({
    getCurrentUser: (user) => dispatch(getCurrentUser(user))
  });
  
  export default connect(null, mapDispatchToProps)(Login);
