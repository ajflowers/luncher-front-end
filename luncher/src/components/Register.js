import React from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";


class Register extends React.Component {
  state = {
    newUser: {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: ""
    }
  }

  handleChange = e => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/admins/register", this.state.newUser)
      .then(res => {
        console.log(res);
        this.props.history.push("/login");
      })
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <div className="registration-form">
        <h2>Register</h2>
        <form onSubmit={this.register}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.newUser.username}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.newUser.password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.newUser.email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={this.state.newUser.first_name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={this.state.newUser.last_name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button>Register</button>
        </form>
      </div>
    );
  }
};

export default Register;
