import React, { useState } from "react";

function Counter(){
  const[state,setstate]=useState(0);
  return(
    <div>
      <p>Count: {state}</p>
      <button onClick={()=> setstate(state+1)}>INCREMENT</button>
      <button onClick={()=> setstate(state-1)}>Decrement</button>
    </div>
  )
}
export default Counter;
