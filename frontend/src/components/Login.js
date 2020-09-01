import React from 'react';
import axios from 'axios';
import { login } from '../api';

export default class Login extends React.Component {
    constructor(props){
        super(props)
        axios.defaults.withCredentials = true;
        this.state = {username: '', password: ''};
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }
  
    onSubmit = async event =>{
        event.preventDefault()
        console.log('handleSubmit')

       
        const { username, password } = this.state;
        if(username && password) {
            try {
                const payload = { username, password };
                const response = await login(payload)
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username,
                        admin: response.data.admin
                    })
                }
            } catch (err) {
                console.log('login error: ')
                console.log(err);
            }
        };
	};

    onChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})

    }

 
    render(){
        return (
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
    }
}