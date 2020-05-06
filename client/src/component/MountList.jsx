import React from 'react';

const ArrayOfMounts = ({ mount }) => {
  const { name, description, picture } = mount;
  return (
    <div className="list-group-item ind-pic col-sm">
      <img className="mount-img" src={picture || ''} alt="mount"></img>
    </div>
  );
};

export default ArrayOfMounts;
