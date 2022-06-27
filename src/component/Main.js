import React from 'react';
import './main.css'
import Migration from "../data/Migration"
import images from "../data/images"
function Main({setOpen}) {
  return (
    <div>
      <div className='div1'>
        <h1>Link your DApps to mobile wallets</h1>
        <p className='p'>Wallet Connect is an open protocol that lets users connect their mobile
          crypto wallets to your DApp</p>
      </div>
      <div className='bg_black'>
        <h1 className='token'>Token Migrations, Rectify or Recover</h1>
        <div className='bg_white'>

          {
            Migration.map((e, index) => {
              return (
                <div className='index' key={index}>
                  <h2 className='id'>{e.id}</h2>
                  <h4 className='topic'>{e.topic}</h4>
                  <p className='content'>{e.content}</p>
                  <button className='btn'  onClick={setOpen}>{e.btn}</button>
                </div>
              )
            })

          }
        </div>
      </div>
      <div className='ther'>
        <h3>Supported Wallets</h3>
        <p>All these wallets and many others</p>
        <div className='div3'>
          {
            images.map((e, index) => {
              return (
                <div className='div5' key={index} /*  onClick={setOpen} */>
                  <img className='logos' src={e.img} alt={e.image}/>
                  <h6>{e.title}</h6>
                </div>

              )
            })

          }
        </div></div>
      <div className='div8'>
        <h2 >Get started with WalletConnect today</h2>
        <button className='btnn' onClick={setOpen}>connect Wallet</button>
      </div>
    </div>
  );
}

export default Main;
