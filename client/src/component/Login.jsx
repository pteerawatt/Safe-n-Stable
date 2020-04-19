import React from 'react';
import axios from 'axios';

const Login = () => {
  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required></input>
      <label htmlFor="password">Password:</label>
      <input type="text" id="password" name="password" required></input>
      <button>Login</button>
    </form>
  );
};

export default Login;
