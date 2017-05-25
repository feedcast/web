import React, { PropTypes } from 'react';
import logo from '../../images/logo.png';
import './Logo.scss';

function Logo() {
  return (
    <div className='logo'>
      <img src={logo}  />
      <h1><b>Feed</b>Cast</h1>
    </div>
  );
}

export default Logo;
