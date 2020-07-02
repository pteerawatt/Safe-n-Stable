import React, { useState } from 'react';

const AddMount = ({ AddMountByName }) => {
  const [mountName, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    AddMountByName(mountName);
  };

  const addName = (e) => {
    e.preventDefault();
    console.log('hello');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input className="form-control" placeholder="Add mount to Stable" type="text" id="mountName" name="mountName" value={mountName} required onChange={(event) => { setName(event.target.value); }}></input>
        <button className="btn btn-dark add-mount-btn">Add</button>
        {/* help button */}
        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal" style={{ marginLeft: '8px' }}>?</button>
        {/* this is the help modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Need help?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div>
                Simply type the name of the mount (case sensitive) you want to add and click add!
                </div>
                <br></br>
                <div>
                  A list of mount names can be found&nbsp;
                  <span></span>
                  <a href="https://www.warcraftmounts.com/gallery.php" rel="noopener noreferrer" target="_blank">
                    here
                  </a>
                </div>
                <br></br>
                <div>
                  Here are some cool mounts you can start with:&nbsp;
                  <a href="#" onClick={addName}>Brown Horse</a>
                  ,&nbsp;
                  <a href="#" onClick={addName}>Glacial Tidestorm</a>
                  ,&nbsp;
                  <a href="#" onClick={addName}>Priestess' Moonsaber</a>
                  .
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddMount;
