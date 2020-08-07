import React from 'react';

import Mohan from '../assets/images/mohan-muruge.jpg';

const CommmentFormComponent = () => {
  return (
    <form className='com-form'>
      <img
        className='com-form__pfp'
        src={Mohan}
        alt={'The user\'s profile'}
      />
      <label className='com-form__label'>Join the conversation
        <textarea
          className='com-form__comment'
          name='comment'
          placeholder='Add a new comment'
          required
        ></textarea>
      </label>
      <input
        className='btn btn--comment'
        type='submit' 
        value='comment' />
    </form>
  );
}

export default CommmentFormComponent;
