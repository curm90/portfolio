import React from 'react';
import resume from '../img/resume.pdf';

const Navigation = () => (
  <nav className='navigation'>
    <ul className='list-items'>
      <li className='list-item'>
        <a className='link' href='#header'>
          Home
        </a>
      </li>
      <li className='list-item'>
        <a className='link' href='#about'>
          About
        </a>
      </li>
      <li className='list-item'>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href={resume}
        >
          Resume
        </a>
      </li>
      <li className='list-item'>
        <a className='link' href='#projects'>
          Projects
        </a>
      </li>
      <li className='list-item'>
        <a className='link' href='#contact'>
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
