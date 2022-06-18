import React, { useState } from 'react';
import image from '../image/image';
import "./modal.css"
import "./footer.css"
function modal() {
   const[close ,setClose] = useState('blue')

  return (
    <div className="bg_color">
      <div className="dinv">
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
          <a>{close}</a>
        </button>
        <button className="btn1" onClick={()=>setClose("red" ? "red" : "blue")}>
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

export default modal;
