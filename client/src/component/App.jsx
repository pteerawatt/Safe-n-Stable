import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import CreateAcc from './CreateAcc.jsx';
import Stable from './Stable.jsx';

const App = () => {
	const [token, setToken] = useState('');
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
	const [mountName, setMountName] = useState('');
	const [mountDes, setMountDes] = useState('');
	const [mountPic, setMountPic] = useState('');
	const [mountId, setMountId] = useState(0);
	const [creatureId, setCreatureId] = useState(0);

	// get the token to do API request to blizzard
	useEffect(() => {
		axios.post('/token').then((result) => {
			setToken(result.data);
		});
	});

	// conditionally render stable page
	const updateLogin = () => {
		setLogin(true);
	};

	// update the current user on successful login
	const updateUser = (usr) => {
		setUser(usr);
	};

	// get mount by name and add to DB
	const AddMountByName = (name) => {
		// query for all mount and filter by id
		axios.get('/mounts', {
			params: {
				token,
			},
		}).then((result) => {
			const allMount = result.data.mounts;
			const target = allMount.filter((targetMount) => targetMount.name === name);
			setMountName(target[0].name);
			setMountId(target[0].id);
		}).then(() => {
			// get info on a mount
			axios.get('/mountinfo', {
				params: {
					token,
					id: mountId,
				},
			}).then((result) => {
				setMountDes(result.data.description);
				setCreatureId(result.data.creature_displays[0].id);
			}).then(() => {
			axios.get('/creature', {
				params: {
					token,
					id: creatureId,
				},
			}).then((result) => {
				setMountPic(result.data.assets[0].value);
			}).then(() => {
				axios.post('/users/mounts', {
					data: {
						username: currUser.username,
						name: mountName,
						description: mountDes,
						picture: mountPic,
					},
				}).then((result) => {
					alert(`Successfully added ${mountName}`);
					setUser(result.data);
				});
			});
		});
		});
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
			<Stable currUser={currUser} AddMountByName={AddMountByName} />
		</div>
	);
};

export default App;
