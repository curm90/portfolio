import React from 'react';
import Skills from './Skills';

const About = () => (
  <section id='about' className='about__container'>
    <h1 className='about__title'>ABOUT</h1>
    <div className='about-text__container'>
      <p className='about-text'>
        Gamer - Reader - Located in England - Willing to relocate. I
        have a serious passion for learning all things programming,
        and creating seemless user experiences
      </p>
      <Skills />
    </div>
  </section>
);

export default About;
