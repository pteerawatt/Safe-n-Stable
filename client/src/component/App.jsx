import React from 'react';
import Login from './Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

	render() {
		return (
			<div>
				<Login />
			</div>
		);
	}
}

export default App;
