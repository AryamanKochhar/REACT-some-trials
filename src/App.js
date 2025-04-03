import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Calculator from './Calculator';

function counterapp1() {
  const [count,setc]=useState(0);
  
  return (
    <div style={{textAlign:"center"}}>
      <Calculator />
    </div>
  )
}

export default counterapp1;
