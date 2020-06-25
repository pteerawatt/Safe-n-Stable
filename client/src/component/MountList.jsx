import React from 'react';

const ArrayOfMounts = ({ mount, index, changeMainDisplay }) => {
  const { name, description, picture } = mount;

  // click to add item to main display
  const handleClick = (event) => {
    event.preventDefault();
    changeMainDisplay(index);
  };

  return (
    <div className="list-group-item imgBox col-sm">
      <img className="mount-img" src={picture || ''} alt="mount" onClick={handleClick}></img>
    </div>
  );
};

export default ArrayOfMounts;
