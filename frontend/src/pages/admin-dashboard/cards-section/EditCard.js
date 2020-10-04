import React from 'react';
import api from '../../api';
import { Redirect } from 'react-router-dom';
import { CardForm } from './CardForm';
export default class EditCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false,
            name: '',
            type: '',
            letter: '',
            img: '',
            audio: null
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    async componentDidMount () {
        try{
            const res = await api.editCard(this.props.id)
            const { name, type, letter, img, audio } = res.data;
            this.setState({
                name: name,
                type: type,
                letter: letter,
                img: img,
                audio: audio
            })
        } catch(err){
            console.log(err)
        }
    }

    onSubmit = async event =>{
        event.preventDefault();
        const { name, type, letter, img, audio } = this.state;
        if( name, type, letter, img ){
            try {
                const payload = {
                    name,
                    type,
                    letter,
                    img,
                    audio
                }
                await api.updateCard(this.props.id, payload)
                this.setState({redirect: true});
            } catch (err){
                console.log(err)
                
            };
        };
    }

    onChange = event => { 
        this.setState({[event.target.name]: event.target.value })
    }

    render(){
        if(this.state.redirect){
            return (
                <Redirect to={{
                    pathname: "/admin/cards",
                    state: { from: this.props.location }
                  }} />
            )
        }
        return(
        
            <CardForm
            btnText="Update Card"
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
