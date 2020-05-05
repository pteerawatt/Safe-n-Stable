import React from 'react';

const ArrayOfMounts = ({ mount }) => {
  const { name, description, picture } = mount;
  return (
    <div>
      <img src={picture || ''} alt="mount"></img>
    </div>
  );
};

export default ArrayOfMounts;
