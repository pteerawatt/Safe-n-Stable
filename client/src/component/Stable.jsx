import React, { useState, useEffect } from 'react';
import CurrentMount from './CurrentMount.jsx';
import MountList from './MountList.jsx';
import AddMount from './AddMount.jsx';
import Pagination from './Pagination.jsx';
import Carousel from './Carousel.jsx';

const Stable = ({ currUser, AddMountByName, updateUser }) => {
  // select mount to be in main display
  const [display] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const allMounts = currUser.stable;
  const mainDisplay = allMounts[display] || 'noMount';

  // Get current posts in a page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allMounts.slice(indexOfFirstPost, indexOfLastPost);

  // change page number on click
  const changePage = (page) => {
    setCurrentPage(page);
  };

  // renders carousel when window size is less than 1000px
  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth);
  });

  if (windowSize >= 1000) {
    return (
      <div>
        <h1>
          {`Welcome to your stable ${currUser.username}!`}
        </h1>
        <div className="stable-container">
          <div className="main-display">
            <AddMount AddMountByName={AddMountByName} />
            <CurrentMount mount={mainDisplay} user={currUser.username} updateUser={updateUser} />
          </div>
          <div className="list-group mb-4 outerImgBox">
            <div className="container innerImgBox">
              <ul className="row">
                {currentPosts.map((mount) => {
                  return <MountList mount={mount} key={mount._id} />;
                })}
              </ul>
            </div>
            <Pagination postPerPage={postsPerPage} totalPosts={allMounts.length} changePage={changePage} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>
        {`Welcome to your stable ${currUser.username}!`}
      </h1>
      <AddMount AddMountByName={AddMountByName} />
      <Carousel allMounts={allMounts} />
    </div>
  );
};

export default Stable;
