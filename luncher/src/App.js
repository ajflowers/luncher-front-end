import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Login from './components/Login'
// import SchoolData from './components/SchoolData'
// import SchoolList from './components/SchoolList'
import Register from './components/Register'
import AdminDash from './components/AdminDash'
import PrivateRoute from './components/PrivateRoute'
import SchoolList from './components/SchoolList';

function App() {

  // const [schoolList, setSchoolList] = useState();
  // console.log(SchoolData);

  // const addNewSchool = school => {
  //   setSchoolList([...schoolList, school])
  // }

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" coomponent={Register} />
        <PrivateRoute exact path="/dashboard" component={AdminDash} />
        <SchoolList />
      </div>
    </Router>
  );
}

export default App;
