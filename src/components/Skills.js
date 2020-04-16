import React from 'react';

const Skills = () => (
  <div className='skills__container'>
    <div className='skill-list__container'>
      <ul className='skill-list'>
        <li>
          <i className='fab fa-html5'></i>
          HTML
        </li>
        <li>
          <i className='fab fa-css3-alt'></i>CSS/SCSS
        </li>
        <li>
          <i className='fab fa-js'></i>JavaScript
        </li>
        <li>
          <i className='fab fa-react'></i>React/Redux
        </li>
        <li>
          <i className='fab fa-node'></i>NodeJS/Express
        </li>
      </ul>
    </div>
    <div className='skill-list__container'>
      <ul className='skill-list'>
        <li>
          <i className='fab fa-python'></i>Python
        </li>
        <li>
          <i className='fab fa-sketch'></i>GraphQL/Prisma
        </li>
        <li>
          <i className='fas fa-server'></i>MongoDB/Mongoose
        </li>
        <li>
          <i className='fas fa-database'></i>Postgres
        </li>
        <li>
          <i className='fas fa-pencil-ruler'></i>UI Design
        </li>
      </ul>
    </div>
  </div>
);

export default Skills;
