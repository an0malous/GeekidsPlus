import React from 'react';
import auth from '../../auth';
import { Redirect } from 'react-router-dom';
export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {username: '', password: '', redirectTo: null};
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
  
    onSubmit = event =>{
        event.preventDefault()
        const { username, password } = this.state;
        if(username && password) {
            auth.login(username, password, ({ username, role })=>{
                if(username, role){
                    this.props.updateUser({ loggedIn: true, username: username, role: role})
                    this.setState({redirectTo: "/"})
                }
            });
        } else {
            console.log("No username or password")
        }
    };
    
    onChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        return (
            this.state.redirectTo ? (<Redirect to="/" />) : (
            <div>
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
}