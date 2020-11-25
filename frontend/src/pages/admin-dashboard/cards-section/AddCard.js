import React from 'react';
import api from '../../../api';
import { Redirect } from 'react-router-dom';
import { CardForm } from './CardForm'
export default class AddCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirectTo: false,
            name: '',
            type: '',
            letter: '',
            img: '',
            audio: null
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit = async event =>{
        event.preventDefault();
        const {name, type, letter, img, audio} = this.state;
        if( name, type, letter, img){
            try {
                const payload = {name, type, letter, img, audio}
                const res = await api.createCard(payload);
                console.log(`Post request Sent ${res.data}`);
                this.setState({redirectTo: true})
            } catch (err){
                console.log(`Sorry, the request could not be made. Error: ${err}`);
            }
        }  
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    render(){
        if(this.state.redirectTo){
            return <Redirect to={{
                pathname: "/admin/cards",
                state: { from: this.props.location }
              }} />
        }
        return (
          <CardForm
          btnText="Create Card"
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}            
          name={this.state.name}
          type={this.state.type}
          letter={this.state.letter}
          img={this.state.img}
          audio={this.state.audio} />
        )
    }
}
