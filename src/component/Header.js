import React from 'react';
import image from '../iimage/index'
import "./header.css"
function Header() {
  return (
    <div>
      <link><img src={image.logo} alt="logo"/></link>
    </div>
  );
}

export default Header;
