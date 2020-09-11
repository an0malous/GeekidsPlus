import React from 'react';
import axios from 'axios';

export default class EditCardNew extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            type: '',
            letter: '',
            img: '',
            audio: null
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onLetterChange = this.onLetterChange.bind(this);
        this.onImgChange = this.onImgChange.bind(this);
    }

    componentDidMount () {
        axios.get("/admin/cards/edit/" + this.props.id)
        .then((res)=>{
            this.setState({
                name: res.data.name,
                type: res.data.type,
                letter: res.data.letter,
                img: res.data.img,
                audio: res.data.audio
            })
        })
    }

    onSubmit = (event) =>{
        event.preventDefault();
        const editedCard = {

            name: this.state.name,
            type: this.state.type,
            letter: this.state.letter,
            img: this.state.img,
            audio: this.state.audio
        }
        axios.post("/admin/cards/edit/" + this.props.id, editedCard)
        .then((res)=>console.log(`Post request Sent ${res.data}`), window.location = "/cards")
        .catch((err)=>console.log(`Sorry, the request could not be made. Error: ${err}`));
    }

    onNameChange =(event) =>{
        
        this.setState({name: event.target.value })
    }

    onTypeChange = (event) => {
      
        this.setState({type: event.target.value })
    }

    onLetterChange = (event) => {
     
        this.setState({letter: event.target.value })
    }

    onImgChange = (event) => {
        this.setState({img: event.target.value })
    }
    render(){
        return(
            <div>
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>Word Label</label>
                        <input value={this.state.name} onChange={this.onNameChange} type="text" name="name" placeholder="word name" />
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Type</label>
                            <select value={this.state.type} onChange={this.onTypeChange} className="ui fluid dropdown">
                            <option value="" disabledSelect>Choose a Type</option>
                                <option value="cvc">CVC</option>
                                <option value="cvcAdd">CVC Add on</option>
                                <option value="blends">Blends</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Letter</label>
                            <select value={this.state.letter} onChange={this.onLetterChange} className="ui fluid dropdown">
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
                        <input value={this.state.img} onChange={this.onImgChange} type="text" name="img" placeholder="image url" />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
