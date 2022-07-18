import React from 'react';
import image from '../image/image';
import "./modal.css"
import "./footer.css"

const Modal = ({classname, setOpen}) => {
  
  
  return (
    <div className={`bg_color ${classname}`}    >
      <div className="dinv" >
        <p>Connect Wallet</p>
        <img src={image.close} alt="close" className='closee'onClick={setOpen}   />
        <button className="btn1">
          <img className="social" src={image.metamask} alt="metamask" />
          <p>Metamask</p>
        </button>
        <button className="btn1">
          {" "}
          <img className="social" src={image.trustwallet} alt="metamask" />
          <p>TrustWallet</p>{" "}
        </button>
        <button className="btn1">
          <img className="social" src={image.Safepal} alt="metamask" />
          <a>SafePal</a>
        </button>
        <button className="btn1">
          <img className="social" src={image.walletio} alt="metamask" />
          <p>WalletConnect</p>
        </button>
        <p>
          We do not own your private keys and cannot access your funds without
          your confimation.
        </p>
      </div>
    </div>
  );
}

export default Modal;
