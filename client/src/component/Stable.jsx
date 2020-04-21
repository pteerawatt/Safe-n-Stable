import React, { useState, useEffect } from 'react';
import CurrentMount from './CurrentMount.jsx';
import MountList from './MountList.jsx';

const Stable = ({ currUser }) => {

  // select mount to be in main display
  const [display, setDisplay] = useState(0);

  const allMounts = currUser.stable;
  const mainDisplay = allMounts[display];

  return (
    <div>
      <div>
        {`Welcome to your stable ${currUser.username}!`}
      </div>
      <CurrentMount mount={mainDisplay} />
      {allMounts.map((mount) => {
        return <MountList mount={mount} />;
      })}
    </div>
  );
};

export default Stable;
