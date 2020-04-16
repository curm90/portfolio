import React from 'react';

const Header = () => (
  <section id='header' className='header-container'>
    <div className='header-welcome-message'>
      <h3 className='intro'>
        Hi, I&apos;m <span className='name'>Liam Sutton</span>.
      </h3>
      <h3 className='intro'>I&apos;m a full stack developer.</h3>
      <a href='#projects'>
        <button className='button'>View my work</button>
      </a>
    </div>
  </section>
);

export default Header;
