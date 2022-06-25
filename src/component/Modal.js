import React, { useState } from 'react';
import image from '../image/image';
import "./modal.css"
import "./footer.css"

const Modal = ({classname}, {upclose}) => {
  let v =  document.getElementsByClassName("bg_color flex")[0]
  const [close, setclose ] = useState ("bg_color")   
  
  function closer(params) {
    document.getElementsByClassName("bg_color")[0].className = "bg_color flex"
  }

  return (
    <div className={`bg_color ${classname}`}  onClick={() => setclose(closer)}  >
      <div className="dinv" >
        <p>Connect Wallet</p>
        <button className="btn1">
          <img className="social" src={image.metamask} alt="metamask" />
          <a>Metamask</a>
        </button>
        <button className="btn1">
          {" "}
          <img className="social" src={image.trustwallet} alt="metamask" />
          <a>TrustWallet</a>{" "}
        </button>
        <button className="btn1">
          <img className="social" src={image.Safepal} alt="metamask" />
          <a>SafePal</a>
        </button>
        <button className="btn1">
          <img className="social" src={image.walletio} alt="metamask" />
          <a>WalletConnect</a>
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
