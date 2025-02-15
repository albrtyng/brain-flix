import React, { Component } from 'react';
import axios from 'axios';

import CommentsComponent from '../components/CommentsComponent';
import VideoInfoComponent from '../components/VideoInfoComponent';
import VideoListComponent from '../components/VideoListComponent';
import VideoPlayerComponent from '../components/VideoPlayerComponent';

import '../styles/pages/VideoPage.scss';

import { API_URL, API_KEY } from '../helpers/constants.js';

class VideoPage extends Component {
  state = {
    videos: [],
    selected: {},
    comments: []
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.persist();

    const comment = event.target.comment.value;
    event.target.reset();

    axios.post(
      `${API_URL}/videos/${this.state.selected.id}/comments?api_key=${API_KEY}`,
      {
        name: 'Mohan Muruge',
        comment: comment
      }
    )
    .then(response => {
      this.fetchSelectedVideo();
    })
  }

  fetchSelectedVideo = () => {
    const id  = this.props.match.params.id || this.state.selected.id;

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
      // If we have an id from url, use it. Otherwise, default to first in response array
      const id  = this.props.match.params.id || response.data[0].id;

      // Chaining these two requests together prevents one extra render by setting state once
      axios.get(`${API_URL}/videos/${id}/?api_key=${API_KEY}`)
      .then(response2 => {
        this.setState({
          videos: response.data,
          selected: response2.data,
          comments: response2.data.comments
        })
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidUpdate(_prevProps, prevState) {
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
        <div className='video__container'>
          <div className='video__left'>
            <VideoInfoComponent video={selected}/>
            <CommentsComponent
              comments={comments.sort((a,b) => b.timestamp - a.timestamp)}
              handleSubmit={this.handleSubmit}
            />
          </div>
          <VideoListComponent videos={videos.filter(video => video.id !== selected.id)}/>
        </div>
      </>
    )
  }
}

export default VideoPage;