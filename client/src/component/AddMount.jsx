import React, { useState } from 'react';

const AddMount = ({ AddMountByName }) => {
  const [mountName, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    AddMountByName(mountName);
  };
  return (
    <form id="butto" onSubmit={handleSubmit}>
      <label htmlFor="mountName">Add to Stable: </label>
      <input placeholder="Mount name" type="text" id="mountName" name="mountName" value={mountName} required onChange={(event) => { setName(event.target.value); }}></input>
      <button>Add</button>
    </form>
  );
};

export default AddMount;
