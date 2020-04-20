import React from 'react';
import devcoach from '../../img/devcoach.jpg';
import chat from '../../img/chat.jpg';
import weather from '../../img/weather.jpg';

const Projects = () => {
  return (
    <section id='projects' className='projects__container'>
      <h1 className='projects__title'>PROJECTS</h1>
      <div className='project'>
        <div className='project__description'>
          <h3 className='project__title'>DevCoach</h3>
          <p className='description__text'>
            DevCoach is a platform that allows software developers to
            practice and enhance their technical interview skills.
            With our built-in code editor and live video sharing, its
            easy to connect with coaches and work through a coding
            problem.
          </p>
          {/* <div className='tech__container'>
            <ul className='tech__list'>
              <li className='tech'>
                <i className='fab fa-react'></i>React
              </li>
              <li className='tech'>
                <i className='fab fa-node-js'></i>Node
              </li>
              <li className='tech'>
                <i className='far fa-comments'></i>Pusher
              </li>
              <li className='tech'>
                <i className='far fa-file-code'></i>Judge0
              </li>
              <li className='tech'>
                <i className='fas fa-photo-video'></i>Twilio
              </li>
            </ul>
          </div> */}
        </div>
        <div className='project-image__container'>
          <img
            src={devcoach}
            alt='devcoach project'
            className='project__image'
          />
        </div>
        <div className='project__links'>
          <a
            href='https://www.dev-coach.com'
            className='project__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit Website
          </a>
          <a
            href='https://github.com/LABS-EU3/quality_hub_frontend'
            className='project__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            Source Code
          </a>
        </div>
      </div>
      <div className='project'>
        <div className='project__description'>
          <h3 className='project__title'>Weather App</h3>
          <p className='description__text'>
            Need to know the weather forecast? Enter a location and
            receive a summary of the current weather for that day.
          </p>
          {/* <div className='tech__container'>
            <ul className='tech__list'>
              <li className='tech'>
                <i className='fab fa-node-js'></i>Node
              </li>
              <li className='tech'>
                <i className='fas fa-bicycle'></i>hbs
              </li>
            </ul>
          </div> */}
        </div>
        <div className='project-image__container'>
          <img
            src={weather}
            alt='weather project'
            className='project__image'
          />
        </div>
        <div className='project__links'>
          <a
            href='https://weather-application-sutton.herokuapp.com/'
            className='project__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit Website
          </a>
          <a
            href='https://github.com/curm90/NodeJs-weather-app'
            className='project__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            Source Code
          </a>
        </div>
      </div>
      <div className='project'>
        <div className='project__description'>
          <h3 className='project__title'>Chat App</h3>
          <p className='description__text'>
            A real time chat app built using socket.io. Create a room
            for you and your friends and meet new people.
          </p>
          {/* <div className='tech__container'>
            <ul className='tech__list'>
              <li className='tech'>
                <i className='fab fa-node-js'></i>Node
              </li>
              <li className='tech'>
                <i className='far fa-comments'></i>Socket.io
              </li>
            </ul>
          </div> */}
        </div>
        <div className='project-image__container'>
          <img
            src={chat}
            alt='chat project'
            className='project__image'
          />
        </div>
        <div className='project__links'>
          <a
            href='https://chat-app-sutton.herokuapp.com/'
            className='project__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit Website
          </a>
          <a
            href='https://github.com/curm90/Chat-App'
            className='project__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            Source Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
