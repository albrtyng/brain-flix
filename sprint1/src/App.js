import React from 'react';

import CommentsComponent from './components/CommentsComponent';
import CommmentFormComponent from './components/CommentFormComponent';
import TitleBarComponent from './components/TitleBarComponent';
import VideoInfoComponent from './components/VideoInfoComponent';
import VideoListComponent from './components/VideoListComponent';

import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <TitleBarComponent />
      <VideoInfoComponent />
      <CommmentFormComponent />
      <CommentsComponent />
      <VideoListComponent />
    </div>
  );
}

export default App;
