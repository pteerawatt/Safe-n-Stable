import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ updateLogin, updateUser }) => {
  const [username, setName] = useState('');
  const [password, setPass] = useState('');

  // populates the user info on main app
  const getUser = (uName) => {
    axios.get('/api/users', { params: { username: uName } })
    .then((results) => {
      updateUser(results.data);
    });
  };

  // on submit will reach out to DB and authenticate
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/users/login', {
      data: {
        username,
        password,
      },
    })
      .then((result) => {
        alert(result.data);
        if (result.data === 'Your logged in!') {
          updateLogin();
          getUser(username);
         }
      });
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username"></label>
        <input className="form-control" placeholder="Username" type="text" id="username" name="username" value={username} required onChange={(event) => { setName(event.target.value); }}></input>
        <br></br>
        <label htmlFor="password"></label>
        <input className="form-control" placeholder="Password" type="text" id="password" name="password" value={password} required onChange={(event) => { setPass(event.target.value); }}></input>
        <br></br>
        <button className="btn btn-outline-dark btn1">Login</button>
      </div>
    </form>
  );
};

export default Login;
