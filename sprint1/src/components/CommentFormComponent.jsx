import React from 'react';

import Mohan from '../assets/images/mohan-muruge.jpg';

const CommmentFormComponent = () => {
  return (
    <form className='com-form'>
      <label className='com-form__label'>Join the conversation</label>
      <img
        className='com-form__pfp'
        src={Mohan}
        alt={'The user\'s profile'}
      />
      <textarea
          className='com-form__comment'
          name='comment'
          placeholder='Add a new comment'
          required
        ></textarea>
      <input
        className='btn btn--comment'
        type='submit' 
        value='comment' />
    </form>
  );
}

export default CommmentFormComponent;
