import React, { useState, useEffect } from 'react';

// A component for every comment on the page
const CommentItemComponent = (props) => {
  const [time, setTime] = useState('0 seconds ago');

  useEffect(() => { // useEffect to set an update interval for the dynamic timestamp
    const interval = setInterval(() => {
      const msPerMinute = 60000;
      const msPerHour = msPerMinute * 60;
      const msPerDay = msPerHour * 24;

      const current = new Date();
      var diff = current.getTime() - props.timestamp;

      if (diff < msPerMinute) {
        setTime(`${Math.round(diff / 1000)} seconds ago`);
      } else if (diff < msPerHour) {
        setTime(`${Math.round(diff / msPerMinute)} minutes ago`);
      } else if (diff < msPerDay ) {
        setTime(`${Math.round(diff / msPerHour )} hours ago`);
      } else {
        const date = new Date(props.timestamp);
        setTime(date.toLocaleDateString('en-ca'));
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [props.timestamp]);

  return (
    <div className='comment'>
      {
        props.src
          ? <img className='comment__pfp' src={props.src} alt={'The user\'s profile'}/> 
          : <div className='comment__pfp'></div>
      }
      <h3 className='comment__author'>{props.author}</h3>
      <h3 className='comment__timestamp'>{time}</h3>
      <p className='comment__text'>{props.text}</p>
    </div>
  )
}

export default CommentItemComponent;
