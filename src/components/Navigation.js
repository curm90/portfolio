import React, { useState } from 'react';
import Hamburger from './Hamburger';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import resume from '../img/resume.pdf';

const Navigation = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <nav className='navigation__container'>
      {sideDrawerOpen ? (
        <div>
          <Backdrop backdropClickHandler={backdropClickHandler} />
        </div>
      ) : null}

      <Hamburger drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer
        showSideDrawer={sideDrawerOpen}
        drawerClickHandler={drawerToggleClickHandler}
      />
      <ul className='navigation__list'>
        <li className='navigation__list-item'>
          <a className='navigation__link' href='#header'>
            Home
          </a>
        </li>
        <li className='navigation__list-item'>
          <a className='navigation__link' href='#about'>
            About
          </a>
        </li>
        <li className='navigation__list-item'>
          <a
            className='navigation__link'
            rel='noopener noreferrer'
            target='_blank'
            href={resume}
          >
            Resume
          </a>
        </li>
        <li className='navigation__list-item'>
          <a className='navigation__link' href='#projects'>
            Projects
          </a>
        </li>
        <li className='navigation__list-item'>
          <a className='navigation__link' href='#contact'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
