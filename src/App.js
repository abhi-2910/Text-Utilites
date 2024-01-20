// import logo from './logo.svg';
import './App.css';
import Navbar from './modules/Navbar';
import Alert from './modules/Alert';
import Textform from './modules/Textform';
import Acordion from './modules/Acordion';
import React,{ useState } from 'react';
// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
const showalert=(message,type)=>{
  setalert({
  msg:message,
  type:type
})
  setTimeout(()=>{
    setalert(null);
  },2000)
}

  const[btntxt,setbtntxt]=useState('Enable Dark Mode');
  const togglemode=()=>{
    if(mode==='dark'){
      setmode('white');
      setbtntxt('Enable Dark Mode');
      document.body.style.backgroundColor='white';
      showalert("Light Mode Enabled!!!","success")
    }
    else{
      setmode('dark');
      setbtntxt('Enable light Mode');
      document.body.style.backgroundColor='#162445';
      showalert("Dark Mode Enabled!!!","success")
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="Utilites" mode={mode} togglemode={togglemode} btntxt={btntxt}></Navbar>
    <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<Acordion mode={mode} />}></Route> */}
          <Textform heading="Enter your Text Here" mode={mode} showalert={showalert}/>
        {/* </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    {/* <div className="container">
    <Acordion mode={mode}/>
    </div> */}
    </>
  );
}

export default App;
