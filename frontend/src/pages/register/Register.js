import React from "react";
import api from "../../api";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

    onChange (event){
      this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = async event => {
      console.log("sign-up handleSubmit, username: ");
      console.log(this.state.username);
      event.preventDefault();
  
      const {username, password} = this.state;
      if(password && username){
        try{
          const payload = {username, password}
          const response = await api.register(payload);
          console.log(response);
          if (!response.data.errmsg) {
            console.log("successful signup");
            window.location = "/login";
          } else {
            console.log("username already taken");
          }
        } catch(error) {
          console.log("signup error: ");
          console.log(error);
        };
      }
    };  
  
  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              onChange={this.onChange}
              type="text"
              name="username"
              placeholder="username"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              onChange={this.onChange}
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <div className="field">
            <label>Confirm password</label>
            <input
              onChange={this.onChange}
              type="password"
              name="last-name"
              placeholder="confirmation password"
            />
          </div>
          <button className="ui button" type="submit" onClick={this.onSubmit}>
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
