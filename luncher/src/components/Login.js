import React, { useState } from "react";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { sendLogin } from '../actions'

const Login = props => {
  const history = useHistory()

  const [credentials, setCredentials] = useState ({
    username: "",
    password: ""
  })
  

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('sending login to actions', credentials)
    props.sendLogin(credentials, history)
    // axiosWithAuth()
    //   .post("/admins/login", credentials)
    //   .then(res => {
    //     console.log(res);
    //     localStorage.setItem("token", res.data.token);
    //     localStorage.setItem("adminID", res.data.admin.id);

    //     history.push("/dashboard")
    //   })
    //   .catch(err => console.log(err))  
  }

  return (
    <div className="login-form">
      <h2>School Administrator Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Log In</button>
      </form>
      {props.error && <p>{props.error}</p>}

    </div>
  );
};

const mapStateToProps = state => {
  return {
    formSent: state.formSent,
    error: state.error
  }
}

export default connect(mapStateToProps, { sendLogin })(Login);
