import React from 'react';
import resume from '../img/resume.pdf';

const SideDrawer = (props) => (
  <nav className='side-drawer__container'>
    <ul className='side-drawer__list'>
      <li className='side-drawer__list-item'>
        <a className='side-drawer__link' href='#header'>
          Home
        </a>
      </li>
      <li className='side-drawer__list-item'>
        <a className='side-drawer__link' href='#about'>
          About
        </a>
      </li>
      <li className='side-drawer__list-item'>
        <a
          className='side-drawer__link'
          rel='noopener noreferrer'
          target='_blank'
          href={resume}
        >
          Resume
        </a>
      </li>
      <li className='side-drawer__list-item'>
        <a className='side-drawer__link' href='#projects'>
          Projects
        </a>
      </li>
      <li className='side-drawer__list-item'>
        <a className='side-drawer__link' href='#contact'>
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default SideDrawer;
