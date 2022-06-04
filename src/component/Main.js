import React from 'react';
import image from '../image/image'
import './main.css'
import Migration from "../data/Migration"
import images from "../data/images"
function Main() {
  return (
    <div>
      <div className='div1'>
          <h4>Link your DApps to mobile wallets</h4>
          <p className='p'>Wallet Connect is an open protocol that lets users connect their mobile 
              crypto wallets to your DApp</p>
      </div>
      <div className='bg_black'>
      <h1 className='token'>Token Migrations, Rectify or Recover</h1>
        <div className='bg_white'>
         
        {
          Migration.map((e)=>{
            return(
             <div className='flex' >
              
             <h2 className='id'>{e.id}</h2>
             <h4 className='topic'>{e.topic}</h4>
              <p className='content'>{e.content}</p>
              <button className='btn'>{e.btn}</button>
              </div>
             
            )
          })
          
          }
        </div>
      </div>
      <div>
      {
          images.map((e)=>{
            return(
             <img src={e.img} alt={e.image}/>
             
            )
          })
          
          }
      </div>
      <div></div>
    </div>
  );
}

export default Main;
