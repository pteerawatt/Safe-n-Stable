import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import CreateAcc from './CreateAcc.jsx';
import Stable from './Stable.jsx';

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

	// logs user out
	const logOut = () => {
		setLogin(false);
	};

	// update the current user on successful login
	const updateUser = (usr) => {
		setUser(usr);
	};

	// get mount by name and add to DB
	const AddMountByName = (name) => {
		axios.get('/api/users/mounts', {
			params: {
				username: currUser.username,
				name,
			},
		}).then((result) => {
			setUser(result.data);
		});
	};

	// if not logged in, wil display login page
	if (!login) {
		return (
			<div>
				<h1>Welcome to Safe-n-Stable</h1>
				<br></br>
				<div className="container">
					<div className="login-container">
						<div>
							<h2>Login Here</h2>
							<Login updateLogin={updateLogin} updateUser={updateUser} />
						</div>
						<div className="demo-msg">
							<div><strong>Demo account</strong></div>
							<div>Username: demo</div>
							<div>Password: 123</div>
						</div>
					</div>
					<br></br>
					<br></br>
					<br></br>
					<h3>{'Don\'t have an account yet? Create one here!'}</h3>
					<CreateAcc />
				</div>
			</div>
		);
	}
	// if logged in, will display Stable page
	return (
		<div>
			<Stable currUser={currUser} AddMountByName={AddMountByName} updateUser={updateUser} logOut={logOut} />
		</div>
	);
};

export default App;
