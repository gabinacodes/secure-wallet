import React from 'react';
import image from '../image/image';
import "./footer.css"
function Footer() {
  return (
    <div className='div0'>
    <div className='div01'>
     <img src={image.twitter} alt="twitter"/>
     <img src={image.github} alt="github logo"/>
     <img src={image.facebook} alt="facebook logo"/>
     
    </div>
    <div className='divo2'>
    <p>© 2022WalletConnect</p>
    </div>
    </div>
  );
}

export default Footer;
