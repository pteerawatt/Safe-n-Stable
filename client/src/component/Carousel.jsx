import React from 'react';

const Carousel = ({ allMounts }) => {
  const allButFirst = allMounts.slice(1);

  if (allMounts[0]._id !== 0) {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        {/* small buttons at the bottom */}
        <ol className="carousel-indicators">
          {allMounts.map((mount) => {
          return (
            <li key={mount._id} data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          );
          })}
        </ol>
        <div className="carousel-inner">
          <div key={allMounts[0]._id} className="carousel-item active">
            <img className="d-block w-100" src={allMounts[0].picture} alt="First slide"></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>
                {allMounts[0].name}
              </h5>
              <p>
                {allMounts[0].description}
              </p>
            </div>
          </div>
          {allButFirst.map((mount) => {
            return (
              <div key={mount._id} className="carousel-item">
                <img className="d-block w-100" src={mount.picture} alt="slides"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    {mount.name}
                  </h5>
                  <p>
                    {mount.description}
                  </p>
                </div>
              </div>
            );
          })}
          {/* <div class="carousel-item active">
            <img class="d-block w-100" src={allMounts[0].picture} alt="First slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={allMounts[1].picture} alt="Second slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={allMounts[2].picture} alt="Third slide"></img>
          </div> */}
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
    );
  }
  return (
    <div>
      loading . . .
    </div>
  );
};

export default Carousel;
