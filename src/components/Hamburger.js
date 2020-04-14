import React from 'react';

const Hamburger = () => {
  const toggleClass = (e) => {
    e.target.classList.toggle('toggle');
  };

  return (
    <div className='hamburger__icon-container'>
      <h1 onClick={toggleClass} className='hamburger__icon'>
        &#9776;
      </h1>
    </div>
  );
};

export default Hamburger;
