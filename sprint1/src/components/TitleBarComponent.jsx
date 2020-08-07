import React from 'react';

import Logo from '../assets/logo/logo-brainflix.svg';
import Mohan from '../assets/images/mohan-muruge.jpg';

const NavComponent = () => {
  return (
    <>
      <img src={Logo} alt='The Brainflix Logo' />
      <input type='text' placeholder='Search' />
      <button>upload</button>
      <img src={Mohan} alt={'The user\'s profile'} />
    </>
  );
}

export default NavComponent;