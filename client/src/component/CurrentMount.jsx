import React from 'react';

const CurrentMount = ({ mount }) => {
  const { name, description, picture } = mount;
  return (
    <div>
      <div>
        {name}
      </div>
      <img src={picture} alt="mount"></img>
      <div>
        {description}
      </div>
    </div>
  );
};

export default CurrentMount;
