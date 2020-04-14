import React from 'react';

const Hamburger = ({ drawerClickHandler }) => {
  return (
    <div className='hamburger__icon-container'>
      <h1 onClick={drawerClickHandler} className='hamburger__icon'>
        &#9776;
      </h1>
    </div>
  );
};

export default Hamburger;
