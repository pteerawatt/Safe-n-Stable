import React, { useState } from 'react';
import Login from './Login.jsx';
import CreateAcc from './CreateAcc.jsx';
import Stable from './Stable.jsx';
import axios from 'axios';

const App = () => {
	const [login, setLogin] = useState(false);
	const [currUser, setUser] = useState({
		username: '',
		stable: [
			{
				_id: 0,
				name: 'Add a mount to your stable!',
				description: '',
				picture: 'https://safe-n-stable.s3-us-west-1.amazonaws.com/1104261.svg',
			},
		],
	});

	// conditionally render stable page
	const updateLogin = () => {
		setLogin(true);
	};

	// update the current user on successful login
	const updateUser = (usr) => {
		setUser(usr);
	};

	const AddMountByName = (mountName) => {
		
	};
	// if not logged in, wil display login page
	if (!login) {
		return (
					<div>
						<h1>Welcome to Safe-n-Stable</h1>
						<br></br>
						<h2>Login Here</h2>
						<Login updateLogin={updateLogin} updateUser={updateUser} />
						<br></br>
						<br></br>
						<br></br>
						<h3>{'Don\'t have an account yet? Create one here!'}</h3>
						<CreateAcc />
					</div>
				);
	}
	// if logged in, will display Stable page
	return (
		<div>
			<Stable currUser={currUser} />
		</div>
	);
};

export default App;
