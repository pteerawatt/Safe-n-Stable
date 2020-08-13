import React, { useState } from 'react';
import axios from 'axios';

const CreateAcc = () => {
  const [username, setName] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/users', {
      data: {
        username,
        password,
      },
    })
      .then((result) => { alert(JSON.stringify(result.data)); });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username"></label>
      <input className="form-control" placeholder="Username" type="text" id="username" name="username" value={username} required onChange={(event) => { setName(event.target.value); }}></input>
      <br></br>
      <label htmlFor="password"></label>
      <input className="form-control" placeholder="Password" type="password" id="password" name="password" value={password} required onChange={(event) => { setPass(event.target.value); }}></input>
      <br></br>
      <button className="btn btn-outline-dark btn1">Register</button>
    </form>
  );
};

export default CreateAcc;
