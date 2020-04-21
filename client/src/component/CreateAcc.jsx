import React, { useState } from 'react';
import axios from 'axios';

const CreateAcc = () => {
  const [username, setName] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/users', {
      data: {
        username,
        password,
      },
    })
      .then((result) => { alert(JSON.stringify(result.data)); });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input placeholder="username" type="text" id="username" name="username" value={username} required onChange={(event) => { setName(event.target.value); }}></input>
      <label htmlFor="password">Password:</label>
      <input placeholder="password" type="text" id="password" name="password" value={password} required onChange={(event) => { setPass(event.target.value); }}></input>
      <button>Register</button>
    </form>
  );
};

export default CreateAcc;
