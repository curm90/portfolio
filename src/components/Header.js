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
    <div className='links__container'>
      <a
        href='https://www.linkedin.com/in/liam-sutton90/'
        target='blank'
        className='linkedin link'
      >
        <i class='fab fa-linkedin-in'></i>
        LinkedIn
      </a>
      <a
        href='https://github.com/curm90'
        target='blank'
        className='github link'
      >
        <i class='fab fa-github'></i>
        GitHub
      </a>
      <a
        href='https://twitter.com/curm90'
        target='blank'
        className='twitter link'
      >
        <i className='fab fa-twitter'></i>
        Twitter
      </a>
    </div>
  </section>
);

export default Header;
