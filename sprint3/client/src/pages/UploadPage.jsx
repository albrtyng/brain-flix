import React, { Component, createRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../styles/pages/UploadPage.scss';

import Thumbnail from '../assets/images/upload-video-preview.jpg';

class UploadPage extends Component {
  constructor(props) {
    super(props);
    this.formRef = createRef();
  }

  handleUpload = (event) => {
    event.preventDefault();

    axios.post(
      '/videos',
      {
        title: this.formRef.current.title.value,
        channel: 'Mohan Muruge',
        image: '../assets/images/upload-video-preview.jpg',
        description: this.formRef.current.description.value
      }
    ).then(response => {
      console.log(response);
      return this.props.history.push(`/videos/${response.data.id}`)
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className='upload'>
        <h1 className='upload__title'>Upload Video</h1>
        <div className='upload__left'>
          <label className='upload__label'>Video Thumbnail</label>
          <img
            className='upload__thumbnail'
            src={Thumbnail}
            alt='The video thumbnail'
          />
        </div>
        <form className='upload__form' ref={this.formRef}>
          <label className='upload__label'>Title your video</label>
          <input
            className='text-input text-input--vid-title'
            type='text'
            name='title'
            autoComplete="off"
            placeholder='Add a title to your video'
            required
          />
          <label className='upload__label'>Add a video description</label>
          <textarea
            className='text-input text-input--vid-desc'
            name='description'
            placeholder='Add a description of your video' />
        </form>
        <div className='upload__button-container'>
          <button
            className='btn btn--publish'
            onClick={this.handleUpload}>Publish</button>
          <Link className='upload__cancel' to='/videos'>Cancel</Link>
        </div>
      </div>
    )
  }
}

export default UploadPage;