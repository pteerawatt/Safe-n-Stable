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
        <button className="btn btn-dark add-mount-btn">Add</button>
        {/* help button */}
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal" style={{ marginLeft: '8px' }}>?</button>
        {/* this is the help modal */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddMount;
