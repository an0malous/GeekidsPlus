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
        axios.get("/admin/users")
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
        axios.delete("/admin/users/" + id)
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
                    <div className="item">
                             <Link to="/admin/users/add">Add a User</Link>
                    </div>
                </div>
                <div className="ui relaxed divided list">
                    {this.state.users.length > 0 ? this.state.users.map((user)=>(
                        <div className="item">
                            <i className="large github middle aligned icon">asd</i>
                            <div className="content">
                                <Link to={`/admin/users/${user._id}`}>{user.username}</Link> 
                                <div className="description">
                                <Link to={`/admin/users/edit/${user._id}`}>Edit</Link> |<a onClick={()=>{this.deleteItem(user._id)}}>Delete</a> | Access level: {user.role}
                                </div>
                            </div>
                        </div>
                    )) : null}
                </div>
            </div>
        )
    }  
}