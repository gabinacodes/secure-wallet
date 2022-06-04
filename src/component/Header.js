import React from 'react';
import image from '../image/image'
import "./header.css"
function Header() {
  return (
    <div className='header'>
      <img className='logo' src={image.logo} alt="logo"/>
      <h2>WalletConnect</h2>
    </div>
  );
}

export default Header;
