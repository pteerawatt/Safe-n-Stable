import React, { useState, useEffect } from 'react';
import CurrentMount from './CurrentMount.jsx';
import MountList from './MountList.jsx';
import AddMount from './AddMount.jsx';

const Stable = ({ currUser, AddMountByName }) => {
  // select mount to be in main display
  const [display, setDisplay] = useState(0);

  const allMounts = currUser.stable;
  const mainDisplay = allMounts[display];

  return (
    <div>
      <h1>
        {`Welcome to your stable ${currUser.username}!`}
      </h1>
      <AddMount AddMountByName={AddMountByName} />
      <CurrentMount mount={mainDisplay} />
      {allMounts.map((mount) => {
        return <MountList mount={mount} key={mount._id} />;
      })}
    </div>
  );
};

export default Stable;
