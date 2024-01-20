import React, { useState } from 'react'

export default function Textform(props) {
  const handleupClick= ()=>{
    setText(text.toUpperCase());
    props.showalert("Converted to Uppercase!!!","success")
  }
  const handlelowClick= ()=>{
    setText(text.toLowerCase());
    props.showalert("Converted to Lowercase!!!","success")
  }
  const handleclearClick= ()=>{
    setText('');
    setwordcount(0);
    setcharcount(0);
    props.showalert("Cleared!!!","success")
    }
  const handlechange= (event)=>{
    setText(event.target.value);
    const words=text.split(' ');
    setwordcount(words.length);
    setcharcount(text.length);
  }
  const[text,setText]= useState('');
  const[words,setwordcount]=useState(0);
  const[characters,setcharcount]=useState(0);
  // setText("change text");
  return (
    <>
    <div className='container1'>
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='dark'?'black':'white' , color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-outline-danger mx-2" onClick={handleupClick} >Convert to Uppercase</button>
      <button className="btn btn-outline-danger" onClick={handlelowClick}>Convert to Lowercase</button>
      <button className="btn btn-outline-danger mx-2" onClick={handleclearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{words} words and {characters} characters</p>
    </div>
    </>
  )
}
