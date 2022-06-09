import Modal from './component/Modal';
import './App.css';
import Header from "./component/Header"
import Footer from './component/Footer'
import Main from './component/Main'
function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <Footer/>
     <Modal/>
    </div>
  );
}

export default App;
