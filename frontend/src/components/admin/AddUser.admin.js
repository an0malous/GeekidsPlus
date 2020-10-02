import axios from 'axios';
import React from 'react';
import api from '../api';
import { EditUserBody } from './EditUser.body';

export default class AddUser extends React.Component {
    constructor(props){
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: '',
            password: '',
            role: 0
        };
    }

    onSubmit = async event => {
        event.preventDefault()
        let { username, password, role } = this.state;
        if(username, password, role){
            try {
                const payload = { username, password, role}
                const res = await api.createUser(payload);
                console.log(res)
            } catch (err){
                console.log(err);
            }
        }
    }

        
    handleOnChange (event) {
        console.log(event.persist())
        this.setState({[event.target.name]: event.target.value})
    }
        
    render () {
        return (
        <EditUserBody username={this.state.username} password={this.state.password} role={this.state.role} handleOnChange={this.handleOnChange} onSubmit={this.onSubmit} />
        )
    }
}