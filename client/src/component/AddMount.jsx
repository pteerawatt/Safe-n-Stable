import React, { useState } from 'react';

const AddMount = ({ AddMountByName }) => {
  const [mountName, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    AddMountByName(mountName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input className="form-control" placeholder="Add mount to Stable" type="text" id="mountName" name="mountName" value={mountName} required onChange={(event) => { setName(event.target.value); }}></input>
        <button className="btn btn-dark add-mount-btn" data-toggle="tooltip" data-placement="top" title="title">Add</button>
      </div>
    </form>
  );
};

export default AddMount;
