import React, { useState, useEffect } from 'react';

const Stable = ({ currUser }) => {
  return (
    <div>
      <div>
        {`Welcome to your stable ${currUser}!`}
      </div>
    </div>
  );
};

export default Stable;
