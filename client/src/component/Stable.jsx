import React, { useState, useEffect } from 'react';
import CurrentMount from './CurrentMount.jsx';
import MountList from './MountList.jsx';
import AddMount from './AddMount.jsx';

const Stable = ({ currUser, AddMountByName, updateUser }) => {
  // select mount to be in main display
  const [display, setDisplay] = useState(0);

  const allMounts = currUser.stable;
  const mainDisplay = allMounts[display] || 'noMount';

  return (
    <div>
      <h1>
        {`Welcome to your stable ${currUser.username}!`}
      </h1>
      <div class="row">
        <div class="col">
          <AddMount AddMountByName={AddMountByName} />
          <CurrentMount mount={mainDisplay} user={currUser.username} updateUser={updateUser} />
        </div>
        <div class="col">
          {allMounts.map((mount) => {
            return <MountList mount={mount} key={mount._id} />;
        })}
        </div>
      </div>
    </div>
  );
};

export default Stable;
