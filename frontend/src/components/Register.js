import React from "react";
import axios from "axios";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onSubmit = (event) => {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("http://localhost:3000/user/register", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          window.location = "/login";
        } else {
          console.log("username already taken");
        }
      })
      .catch((error) => {
        console.log("signup error: ");
        console.log(error);
      });
  };

  onUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              onChange={this.onUsernameChange}
              type="text"
              name="username"
              placeholder="username"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              onChange={this.onPasswordChange}
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <div className="field">
            <label>Confirm password</label>
            <input
              onChange={this.onConfirmPasswordChange}
              type="password"
              name="last-name"
              placeholder="confirmation password"
            />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" tabindex="0" className="hidden" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button className="ui button" type="submit" onClick={this.onSubmit}>
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
