import React from 'react';

const CommentItemComponent = (props) => {
  return (
    <div className='comment'>
      {
      props.src
        ? <img className='comment__pfp' src={props.src} alt={'The user\' profile'}/> 
        : <div className='comment__pfp'></div>
      }
      <h3 className='comment__author'>{props.author}</h3>
      <h3 className='comment__timestamp'>{props.timestamp}</h3>
      <p className='comment__text'>{props.text}</p>
    </div>
  )
}

export default CommentItemComponent;
