import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class UserList extends React.Component {
    constructor(props){
        super(props)
        this.state = {users:[]}
        this.deleteItem = this.deleteItem.bind(this)
    }

    componentDidMount(){
        axios.get("http://localhost:3000/users")
        .then(response=>{
            this.setState({users: response.data})
            console.log('login response: ')
            console.log(response)
            if (response.status === 200) {
                console.log(response.data.admin)
                // update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username,
                    admin: response.data.admin
                })
                // update the state to redirect to home
                
            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            
        })
    }

    deleteItem = (id) => {
        axios.delete("http://localhost:3000/users/" + id)
        .then((res)=>console.log(res.data),  window.location = "/admin/users")
        .catch((err)=>console.log(`Sorry, the request could not be made. Error: ${err}`));
    }

    render(){
        return (
            <div>
                 
                <div className="ui tabular menu">
                    <a className="item active">
                                All Users
                    </a>
                    <a className="item">
                             Filter Users
                    </a>
                    <a className="item">
                             Add a User
                    </a>
                </div>
                <div className="ui relaxed divided list">
                    {this.state.users.length > 0 ? this.state.users.map((user)=>(
                        <div className="item">
                            <i className="large github middle aligned icon">asd</i>
                            <div className="content">
                                <Link to={`/admin/users/${user._id}`}>{user.username}</Link> 
                                <div className="description">
                                <Link to={`/admin/edit/users/${user._id}`}>Edit</Link> |<a onClick={()=>{this.deleteItem(user._id)}}>Delete</a> | Access level: {user.admin ? "Admin" : "User"}
                                </div>
                            </div>
                        </div>
                    )) : null}
                </div>
            </div>
        )
    }  
}