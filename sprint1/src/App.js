import React from 'react';

import CommentsComponent from './components/CommentsComponent';
import TitleBarComponent from './components/TitleBarComponent';
import VideoInfoComponent from './components/VideoInfoComponent';
import VideoListComponent from './components/VideoListComponent';
import VideoPlayerComponent from './components/VideoPlayerComponent';

import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <TitleBarComponent />
      <VideoPlayerComponent />
      <div className='App__container'>
        <div className='App__left'>
          <VideoInfoComponent />
          <CommentsComponent />
        </div>
        <VideoListComponent />
      </div>
    </div>
  );
}

export default App;
