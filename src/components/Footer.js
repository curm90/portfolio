import React from 'react';
import Contact from './Contact';

const Footer = () => (
  <section className='footer__container'>
    <h1 className='title'>CONTACT</h1>
    <Contact />
    <div className='links__container'>
      <div className='social__links'>
        <a
          href='https://www.linkedin.com/in/liam-sutton90/'
          target='blank'
          className='linkedin link'
        >
          <i className='fab fa-linkedin'></i>
        </a>
        <a
          href='https://github.com/curm90'
          target='blank'
          className='github link'
        >
          <i className='fab fa-github-square'></i>
        </a>
        <a
          href='https://twitter.com/curm90'
          target='blank'
          className='twitter link'
        >
          <i className='fab fa-twitter-square'></i>
        </a>
      </div>
      <div className='copyright__container'>
        <p className='copyright__text'>
          &copy;2020 Made with love by Liam Sutton
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
