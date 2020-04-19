import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required></input>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password" required></input>
        <button>Login</button>
      </form>
    );
  }
}

export default Login;
