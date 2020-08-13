import React, { Component, useState } from 'react';

import CommentsComponent from './components/CommentsComponent';
import TitleBarComponent from './components/TitleBarComponent';
import VideoInfoComponent from './components/VideoInfoComponent';
import VideoListComponent from './components/VideoListComponent';
import VideoPlayerComponent from './components/VideoPlayerComponent';

import './styles/App.scss';

import initialState from './helpers/constants.js';

import Mohan from './assets/images/mohan-muruge.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    let videos = initialState.videos;
    let selected = 0;
    let comments = videos[selected].comments;
    
    this.state = {
      videos: videos,
      selected: selected,
      comments: comments // avoids setting nested state for comments
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.persist();

    const comment = event.target.comment.value;
    const date = new Date();
    event.target.reset();
    this.setState(prevState => { 
      return { 
        ...prevState,
        comments : [...this.state.comments, {
          author: 'Mohan Muruge',
          timestamp: date.getTime(),
          text: comment,
          src: Mohan
        }]
      }
    })
  }

  render() {
    const {
      videos,
      selected,
      comments,
    } = this.state;

    return (
      <div className="App">
        <TitleBarComponent image={Mohan}/>
        <VideoPlayerComponent video={videos[selected]}/>
        <div className='App__container'>
          <div className='App__left'>
            <VideoInfoComponent video={videos[selected]}/>
            <CommentsComponent comments={comments} handleSubmit={this.handleSubmit}/>
          </div>
          <VideoListComponent videos={videos.filter((video, index) => index !== selected)}/>
        </div>
      </div>
    );
  }
}

export default App;
