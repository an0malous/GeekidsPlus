import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { DynamicListItem as ListItem } from './DynamicListItem'


export default class CardList extends React.Component {
    constructor(props){
        super(props)
        this.state = {cards:[]}
        this.deleteItem = this.deleteItem.bind(this)
    }

    componentDidMount(){
        axios.get("/admin/cards")
        .then(response=>{
            this.setState({cards: response.data})
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
        axios.delete("/admin/cards/" + id)
        .then((res)=>console.log(res.data),  window.location = "/admin/cards")
        .catch((err)=>console.log(`Sorry, the request could not be made. Error: ${err}`));
    }

    render(){
        return (
            <div>
                <div className="ui relaxed divided list">
                    <table class="ui striped table">
                        <thead>
                            <th>Name</th>
                            <th>Created</th>
                            <th>Last Updated</th>
                            <th>Actions</th>
                        </thead>
                        {this.state.cards !== [] ? this.state.cards.map((card)=>(
                            <ListItem mappedItem={card} deleteItem={this.deleteItem} />
                        
                    )) : null}
                    </table>
                </div>
            </div>
        )
    }
}


   