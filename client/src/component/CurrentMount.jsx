import React from 'react';
import axios from 'axios';

const CurrentMount = ({ mount, user, updateUser }) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (mount._id !== 0) {
      axios.delete('/api/users/mounts', {
        params: {
          _id: mount._id,
          username: user,
        },
      }).then((user) => {
        updateUser(user.data);
      });
    }
  };

  if (mount === 'noMount') {
    const name = 'Add a Mount!';
    const picture = 'https://safe-n-stable.s3-us-west-1.amazonaws.com/1104261.svg';
    const description = 'You\'re stable is empty';
    return (
      <div id="main">
        <div>
          {name}
        </div>
        <img src={picture} alt="mount"></img>
        <div>
          {description}
        </div>
      </div>
    );
  }
    const { name, description, picture } = mount;

    return (
      <div>
        <div>
          {name}
        </div>
        <button onClick={handleClick}>Delete</button>
        <br></br>
        <img src={picture} alt="mount"></img>
        <div id="desc">
          {description}
        </div>
      </div>
    );

};

export default CurrentMount;
