import React from 'react';

const Backdrop = ({ backdropClickHandler }) => {
  return (
    <div onClick={backdropClickHandler} className='backdrop'></div>
  );
};

export default Backdrop;
