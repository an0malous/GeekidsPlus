import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import api from '../../../api';

 class UserList extends React.Component {
    constructor(props){
        super(props)
        this.state = {users:[]}
        this.deleteItem = this.deleteItem.bind(this)
    }

    componentDidMount(){
      this.getUsers()
    }

    async getUsers(){
        try {
        const res = await api.getUsers();
        this.setState({users: res.data})
        } catch (err){
            console.log(err)
        }
    }
    deleteItem = (id) => {
        axios.delete("/admin/users/" + id)
        .then((res)=>this.getUsers())
        .catch((err)=>console.log(`Sorry, the request could not be made. Error: ${err}`))
    }

    render(){
     
        return (
        
                <div className="ui relaxed divided list">
                    {this.state.users.length > 0 ? this.state.users.map((user)=>(
                        <div className="item">
                            <i className="large github middle aligned icon">asd</i>
                            <div className="content">
                                <Link to={`${this.props.match.url}/users/${user._id}`}>{user.username}</Link> 
                                <div className="description">
                                <Link to={`${this.props.match.url}/edit/${user._id}`}>Edit</Link> |<a onClick={()=>{this.deleteItem(user._id)}}>Delete</a> | Access level: {user.role}
                                </div>
                            </div>
                        </div>
                    )) : null}
                </div>
        )
    }  
}

export default withRouter(UserList)