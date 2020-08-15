import React, { Component } from 'react';
import axios from 'axios';

import CommentsComponent from './CommentsComponent';
import VideoInfoComponent from './VideoInfoComponent';
import VideoListComponent from './VideoListComponent';
import VideoPlayerComponent from './VideoPlayerComponent';

import { API_URL, API_KEY } from '../helpers/constants.js';

import Mohan from '../assets/images/mohan-muruge.jpg';

class VideoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selected: {},
      comments: []
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

  fetchSelectedVideo = () => {
    const { id } = this.props.match.params;

    axios.get(`${API_URL}/videos/${id}/?api_key=${API_KEY}`)
    .then(response => {
      this.setState(prevState => ({
        ...prevState,
        selected: response.data,
        comments: response.data.comments
      }))
    })
    .catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    axios.get(`${API_URL}/videos?api_key=${API_KEY}`)
    .then(response => {
      const id  = this.props.match.params.id || response.data[0].id;

      axios.get(`${API_URL}/videos/${id}/?api_key=${API_KEY}`)
      .then(response2 => {
        this.setState(prevState => ({
          ...prevState,
          videos: response.data,
          selected: response2.data,
          comments: response2.data.comments
        }))
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected.id !== this.props.match.params.id) {
      this.fetchSelectedVideo();
    }
  }

  render() {
    const {
      videos,
      selected,
      comments,
    } = this.state;

    return (
      <>
        <VideoPlayerComponent video={selected}/>
        <div className='App__container'>
          <div className='App__left'>
            <VideoInfoComponent video={selected}/>
            <CommentsComponent comments={comments} handleSubmit={this.handleSubmit}/>
          </div>
          <VideoListComponent videos={videos.filter(video => video.id !== selected.id )}/>
        </div>
      </>
    )
  }
}

export default VideoComponent;