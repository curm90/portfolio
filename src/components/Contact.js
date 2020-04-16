import React from 'react';

const Contact = () => (
  <div id='contact' className='contact__container'>
    <form className='form'>
      <input className='input' type='text' placeholder='Name' />
      <input className='input' type='text' placeholder='Email' />
      <textarea
        className='input text__input'
        name='message'
        placeholder='Your Message'
      ></textarea>
      <button className='button'>SUBMIT</button>
    </form>
  </div>
);

export default Contact;
