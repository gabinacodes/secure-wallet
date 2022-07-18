import React, { useState } from 'react';
import './App.css';
import Header from "./component/Header"
import Footer from './component/Footer'
import Main from './component/Main'
import Modal from "./component/Modal"
 import Modali from "./component/Modali"
function App() {
  let [open, setOpen] = useState('flex')
  
  return (
    <div className="App">
     <Header/>
     <Main setOpen={()=>setOpen(open = "" )}  />
     <Footer/>
     <Modal classname={open} setOpen={()=>setOpen(open = 'flex')}/>
     <Modali  classname={open} setOpen={()=>setOpen(open = 'flex')} />
    </div>
  );
}

export default App;
