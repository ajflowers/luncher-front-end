import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Redirect } from "react-router-dom"

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // axiosWithAuth()
    //   .post("/api/login", this.state.credentials)
    //   .then(res => {
    //     localStorage.setItem("token", res.data.payload);
    //   })
    //   .catch(err => console.log(err))  
  }

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="dashboard" />
    }
    return (
      <div className="login-form">
        <h2>School Administrator Login</h2>
        <form onSubmit={this.login}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button>Log In</button>
        </form>
      </div>
    );
  }
};

export default Login;
