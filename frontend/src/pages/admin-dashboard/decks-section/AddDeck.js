import axios from 'axios';
import React from 'react';

export default class AddDeck extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            type: '',
            flashCards: {id: '5f5f2ba233bb5e3edc213ec1', name: 'TestCard'}
        }
    }

    onSubmit = async event =>{
        event.preventDefault();
        const {name, type, flashCards} = this.state;
        if( name, type){
            try {
                const payload = {name, type, flashCards}
                const res = await axios.post('/admin/decks/add', payload)
                console.log(`Post request Sent ${res.data}`);
          
            } catch (err){
                console.log(`Sorry, the request could not be made. Error: ${err}`);
            }
        }  
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    render(){
     
        return(
            <div>
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>Deck Name</label>
                        <input onSelect={this.onChange} type="text" name="name" placeholder="word name" />
                    </div>
                   
                        <div className="field">
                            <label>Deck Type</label>
                            <select onChange={this.onChange} name="type" className="ui fluid dropdown">
                            <option value="" disabledSelect>Choose a Type</option>
                                <option value="Phonics">Phonics</option>
                                <option value="flashcards">FlashCards</option>
        
                            </select>
                        </div>
                   
                
               
                    <div className="field">
                        <label>Add Cards</label>
                        <input onChange={this.onChange} type="text" name="img" placeholder="image url" />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}