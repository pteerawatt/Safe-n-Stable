import React, { useState, useEffect } from 'react';
import CurrentMount from './CurrentMount.jsx';
import MountList from './MountList.jsx';
import AddMount from './AddMount.jsx';
import Pagination from './Pagination.jsx';

const Stable = ({ currUser, AddMountByName, updateUser }) => {
  // select mount to be in main display
  const [display] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const allMounts = currUser.stable;
  const mainDisplay = allMounts[display] || 'noMount';

  // Get current posts in a page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allMounts.slice(indexOfFirstPost, indexOfLastPost);

  // page for carousel
  const pages = [];
  const totalPosts = allMounts.length;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const galleryDiv = (
                <div className="carousel-item active">
                  <div className="d-block w-100">
                    <div className="list-group mb-4 gallery">
                      <div className="container">
                        <ul className="row">
                          {currentPosts.map((mount) => {
                            return <MountList mount={mount} key={mount._id} />;
                          })}
                        </ul>
                      </div>
                      <Pagination postPerPage={postsPerPage} totalPosts={allMounts.length} />
                    </div>
                  </div>
                </div>
  );

  const makeGallery = () => {

  };

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
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {pages.map(() => {
              return <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>;
            })}
          </ol>
          <div className="carousel-inner">
            {pages.map(() => {
              return galleryDiv;
            })}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stable;
