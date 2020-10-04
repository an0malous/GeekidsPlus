import React from "react";
import api from "../../api";
import { UserForm } from "./UserForm";
import { Redirect } from "react-router-dom";

export default class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
      role: 0,
      redirect: false,
    };
  }

  async componentDidMount() {
    try {
      const res = await api.editUser(this.props.id);
      const { username, password, role } = res.data;
      this.setState({ username: username, password: password, role: role });
    } catch (error) {
      console.log(error);
    }
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const { username, password, role } = this.state;
    if ((username, password, role)) {
      try {
        const payload = { username, password, role };
        const res = await api.updateUser(this.props.id, payload);
        this.setState({ redirect: true });
      } catch (err) {
        console.log(err);
      }
    }
  };

  handleOnChange(event) {
    console.log(event.persist());
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/admin/users" />;
    }
    return (
      <UserForm
        btText={"Update User"}
        username={this.state.username}
        password={this.state.password}
        role={this.state.role}
        handleOnChange={this.handleOnChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}
