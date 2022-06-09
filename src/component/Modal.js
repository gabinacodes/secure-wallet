import React from 'react';
import image from '../image/image';
import "./footer.css"
function modal() {
  return (
    <div>
      <div>
          <p>Connect Wallet</p>
          <button>
             <img  className='social' src={image.metamask} alt='metamask'/>
             <a>Metamask</a> 
          </button>
          <button> <img className='social' src={image.trustwallet} alt='metamask'/>
             <a>TrustWallet</a> </button>
          <button>
          <img className='social' src={image.Safepal} alt='metamask'/>
             <a>SafePal</a> 
          </button>
          <button>
          <img  className='social'src={image.walletio} alt='metamask'/>
             <a>WalletConnect</a> 
          </button>
          <p>We do not own your private keys and cannot 
              access your funds without your confimation.</p>
      </div>
    </div>
  );
}

export default modal;
