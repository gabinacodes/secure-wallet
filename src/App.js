import React, { useState } from 'react';
import './App.css';
import Header from "./component/Header"
import Footer from './component/Footer'
import Main from './component/Main'
import Modal from "./component/Modal"

function App() {
  let [open, setOpen] = useState('flex')
  return (
    <div className="App">
     <Header/>
     <Main setOpen={()=>setOpen(open = "")} />
     <Footer/>
     <Modal classname={open}/>
    </div>
  );
}

export default App;
