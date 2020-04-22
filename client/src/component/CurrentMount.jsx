import React from 'react';

const CurrentMount = ({ mount }) => {
  if (mount === 'noMount') {
    const name = 'Add a Mount!';
    const picture = 'https://safe-n-stable.s3-us-west-1.amazonaws.com/1104261.svg';
    const description = 'You\'re stable is empty';
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
  }
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
