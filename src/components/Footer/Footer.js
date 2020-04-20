import React from 'react';
import Contact from './Contact';

const Footer = () => (
  <section className='footer__container'>
    <h1 className='title'>CONTACT</h1>
    <p className='contact__text'>Want to chat or get in touch?</p>
    <Contact />
    <div className='links__container'>
      <div className='social__links'>
        <a
          href='https://www.linkedin.com/in/liam-sutton90/'
          target='blank'
          className='linkedin link'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a
          href='https://github.com/curm90'
          target='blank'
          className='github link'
        >
          <i className='fab fa-github'></i>
        </a>
        <a
          href='https://twitter.com/curm90'
          target='blank'
          className='twitter link'
        >
          <i className='fab fa-twitter'></i>
        </a>
      </div>
      <div className='copyright__container'>
        <p className='copyright__text'>
          <span className='copyright__logo'>&copy;2020</span> Liam
          Sutton
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
