import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Calculator from './Counter';
import Welcome from './function_welcome';

function Counterapp1() {
  
  return (
    <div style={{textAlign:"center"}}>
      {/* <Calculator /> */}
      <Welcome name="Aryaman" />;
    </div>
  )
}

export default Counterapp1;
