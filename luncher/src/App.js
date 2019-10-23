import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SchoolData from './components/SchoolData';
import SchoolList from './components/SchoolList';

function App() {

  // const [schoolList, setSchoolList] = useState();
  // console.log(SchoolData);

  // const addNewSchool = school => {
  //   setSchoolList([...schoolList, school])
  // }

  return (
    <div className="App">
      <h1>School List</h1>
      <SchoolList />
    </div>
  );
}

export default App;
