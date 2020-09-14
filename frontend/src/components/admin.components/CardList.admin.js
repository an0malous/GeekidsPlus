import React from 'react';
import api from '../api';
import { DynamicListItem as ListItem } from './DynamicListItem'

export  default class CardList extends React.Component {
    constructor(props){
        super(props)
        this.state = {cards:[]}
        this.deleteItem = this.deleteItem.bind(this)
    }

    getCards = async () => {
        try{
            const res = await api.getCards();
            this.setState({cards: res.data})
        } catch (err){
            console.log(err);
        } 
    }

    componentDidMount(){
        this.getCards();
    }

    deleteItem = async id => {
        if(id){
            try{
                const res = await api.deleteCard(id)
                console.log(res.data);  
                this.getCards();
            } catch(err){
                console.log(`Sorry, the request could not be made. Error: ${err}`);
            }
        }
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


   