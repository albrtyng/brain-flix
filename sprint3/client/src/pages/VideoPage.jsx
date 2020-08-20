import React, { Component } from 'react';
import axios from 'axios';

import CommentsComponent from '../components/CommentsComponent';
import VideoInfoComponent from '../components/VideoInfoComponent';
import VideoListComponent from '../components/VideoListComponent';
import VideoPlayerComponent from '../components/VideoPlayerComponent';

import '../styles/pages/VideoPage.scss';

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
      `/videos/${this.state.selected.id}/comments`,
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

    axios.get(`/videos/${id}`)
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
    axios.get(`/videos`)
    .then(response => {
      // If we have an id from url, use it. Otherwise, default to first in response array
      const id  = this.props.match.params.id || response.data[0].id;

      // Chaining these two requests together prevents one extra render by setting state once
      axios.get(`/videos/${id}`)
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
    const { id } = this.props.match.params;

    if (id && prevState.selected.id !== id) {
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