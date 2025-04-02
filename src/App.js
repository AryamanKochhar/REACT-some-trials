import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function counterapp1() {
  const [count,setc]=useState(0);
  return (
    <div style={{textAlign:"center"}}>
      <h1> Counter : {count} </h1>
      <button onClick={() => setc(count+1)}>Increase</button>
      <button onClick={() => setc(count-1)}>Decrease</button>
      <button onClick={() => setc(0)}>Reset</button>
    </div>
  )
}

export default counterapp1;
