import React from 'react';

import Logo from '../assets/logo/logo-brainflix.svg';
import SearchIcon from '../assets/icons/svg/icon-search.svg'
import UploadIcon from '../assets/icons/svg/icon-upload.svg'

const TitleBarComponent = (props) => {
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
        ></img>
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
        src={props.image}
        alt={'The user\'s profile'}
      />
    </div>
  );
}

export default TitleBarComponent;