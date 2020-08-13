import React, { Component } from 'react';

import Logo from '../assets/logo/logo-brainflix.svg';
import SearchIcon from '../assets/icons/svg/icon-search.svg'
import UploadIcon from '../assets/icons/svg/icon-upload.svg'

// The title bar at the top of the page
class TitleBarComponent extends Component {
  render() {
    return (
      <div className='title-bar'>

        <img
          className='title-bar__logo'
          src={Logo}
          alt='The Brainflix Logo'
        />

        <div className='title-bar__search-container'>
          <img
            className='title-bar__icon'
            src={SearchIcon}
            alt='The search icon'
          />
          <input
            className='title-bar__search'
            type='text'
            placeholder='Search'
          />
        </div>

        <button className='btn btn--upload'>
          <img src={UploadIcon} alt='The upload icon'/>
          upload
        </button>

        <img
          className='title-bar__pfp'
          src={this.props.image}
          alt={'The user\'s profile'}
        />
      </div>
    );
  }
}

export default TitleBarComponent;