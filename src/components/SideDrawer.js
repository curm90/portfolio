import React from 'react';
import Hamburger from './Hamburger';
import resume from '../img/resume.pdf';

const SideDrawer = ({ showSideDrawer, drawerClickHandler }) => {
  let drawerClasses = 'side-drawer__container';

  if (showSideDrawer) {
    drawerClasses = 'side-drawer__container open';
  }

  return (
    <nav className={drawerClasses}>
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
};

export default SideDrawer;
