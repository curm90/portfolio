import React from 'react';
import Contact from './Contact';

const Footer = () => (
  <section className='footer-container'>
    <h1 className='title'>CONTACT</h1>
    <Contact />
    <div className='links-container'>
      <div className='social-links'>
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
    </div>
  </section>
);

export default Footer;
