
import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [openModel,setModelOpen]=useState(false);
  return (
   <div className="App">
    <h1>Hay, click on the button to open the model.</h1>
    <button className='openmodelbtn' onClick={()=>{setModelOpen(true);}}>Open</button>
    {openModel && <Modal CloseModal={setModelOpen}/>}
   </div>
  );
}

export default App;
