import React from 'react';

const ArrayOfMounts = ({ mount, changeMainDisplay }) => {
  const {
         _id,
         name,
         description,
         picture,
        } = mount;

  // click to add item to main display
  const handleClick = (event) => {
    event.preventDefault();
    changeMainDisplay(_id);
  };

  return (
    <div className="list-group-item imgBox col-sm">
      <img className="mount-img" src={picture || ''} alt="mount" onClick={handleClick} data-toggle="tooltip" data-placement="bottom" title={`${name}: \n ${description}`}></img>
    </div>
  );
};

export default ArrayOfMounts;
