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
      <VideoInfoComponent />
      <CommentsComponent />
      <VideoListComponent />
    </div>
  );
}

export default App;
