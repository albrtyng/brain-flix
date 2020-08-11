import React, { useState } from 'react';

import CommentsComponent from './components/CommentsComponent';
import TitleBarComponent from './components/TitleBarComponent';
import VideoInfoComponent from './components/VideoInfoComponent';
import VideoListComponent from './components/VideoListComponent';
import VideoPlayerComponent from './components/VideoPlayerComponent';

import './styles/App.scss';

import initialState from './helpers/constants.js';

import Mohan from './assets/images/mohan-muruge.jpg';

const App = () => {
  const [videos, setVideos] = useState(initialState.videos);
  const [selected, setSelected] = useState(0);
  const [comments, setComments] = useState(videos[selected].comments); // avoids setting nested state like using setVideos for comments

  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();

    const comment = event.target.comment.value;
    const date = new Date();
    event.target.reset();
    setComments(comments => [...comments, {
      author: 'Mohan Muruge',
      timestamp: date.getTime(),
      text: comment,
      src: Mohan
    }]);
  }

  return (
    <div className="App">
      <TitleBarComponent image={Mohan}/>
      <VideoPlayerComponent video={videos[selected]}/>
      <div className='App__container'>
        <div className='App__left'>
          <VideoInfoComponent video={videos[selected]}/>
          <CommentsComponent comments={comments} handleSubmit={handleSubmit}/>
        </div>
        <VideoListComponent videos={videos.filter((video, index) => index !== selected)}/>
      </div>
    </div>
  );
}

export default App;
