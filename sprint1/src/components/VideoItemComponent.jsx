import React from 'react';

const VideoItemComponent = (props) => {
  return (
    <div>
      <img src={require(`../assets/images/${props.src}.jpg`)} alt='The video thumbnail' />
      <h3>{props.title}</h3>
      <p>{props.author}</p>
    </div>
  )
}

export default VideoItemComponent;
