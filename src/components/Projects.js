import React from 'react';

const Projects = () => {
  return (
    <section id='projects' className='projects__container'>
      <h1 className='projects__title'>PROJECTS</h1>
      <div className='project'>
        <a
          href='https://www.dev-coach.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='project-image__container'></div>
        </a>
        <div className='project__description'>
          <p className='description__text'>
            DevCoach is a platform that allows software developers to
            practice and enhance their technical interview skills.
            With our built-in code editor and live video sharing, its
            easy to connect with coaches and work through a coding
            problem.
          </p>
        </div>
      </div>
      <div className='project'>
        <a href='https://weather-application-sutton.herokuapp.com/'>
          <div className='project-image__container'></div>
        </a>
        <div className='project__description'>
          <p className='description__text'>
            DevCoach is a platform that allows software developers to
            practice and enhance their technical interview skills.
            With our built-in code editor and live video sharing, its
            easy to connect with coaches and work through a coding
            problem.
          </p>
        </div>
      </div>

      <div className='project'>
        <a href='https://chat-app-sutton.herokuapp.com/'>
          <div className='project-image__container'></div>
        </a>
        <div className='project__description'>
          <p className='description__text'>
            DevCoach is a platform that allows software developers to
            practice and enhance their technical interview skills.
            With our built-in code editor and live video sharing, its
            easy to connect with coaches and work through a coding
            problem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
