import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
    axiosWithAuth()
      .post("/admins/login", this.state.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("adminID", res.data.admin.id);

        this.props.history.push("/dashboard")
      })
      .catch(err => console.log(err))  
  }

  render() {
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
