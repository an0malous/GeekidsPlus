import React from 'react';
import api from '../api';
import { Redirect } from 'react-router-dom';

export default class EditCardNew extends React.Component {
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
            <div>
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>Word Label</label>
                        <input value={this.state.name} onChange={this.onChange} type="text" name="name" placeholder="word name" />
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Type</label>
                            <select value={this.state.type} onChange={this.onChange} name="type" className="ui fluid dropdown">
                            <option value="" disabledSelect>Choose a Type</option>
                                <option value="cvc">CVC</option>
                                <option value="cvcAdd">CVC Add on</option>
                                <option value="blends">Blends</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Letter</label>
                            <select value={this.state.letter} onChange={this.onChange} name="letter" className="ui fluid dropdown">
                                <option value="" disabledSelect>Choose a Letter</option>
                                <option value="a">a</option>
                                <option value="e">e</option>
                                <option value="i">i</option>
                                <option value="o">o</option>
                                <option value="u">u</option>
                                <option value="y">y</option>
                            </select>
                    </div>
                </div>
                    <div className="field">
                        <label>Image url</label>
                        <input value={this.state.img} onChange={this.onChange} type="text" name="img" placeholder="image url" />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
