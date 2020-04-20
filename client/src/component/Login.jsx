import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ updateLogin, updateUser }) => {
  const [username, setName] = useState('');
  const [password, setPass] = useState('');

  // populates the user info on main app
  const getUser = (uName) => {
    axios.get('/users', { params: { username: uName } })
    .then((results) => {
      updateUser(results.data);
    });
  };

  // on submit will reach out to DB and authenticate
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/users/login', {
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
      <label htmlFor="username">Username:</label>
      <input placeholder="username" type="text" id="username" name="username" value={username} required onChange={(event) => { setName(event.target.value); }}></input>
      <label htmlFor="password">Password:</label>
      <input placeholder="password" type="text" id="password" name="password" value={password} required onChange={(event) => { setPass(event.target.value); }}></input>
      <button>Login</button>
    </form>
  );
};

export default Login;
