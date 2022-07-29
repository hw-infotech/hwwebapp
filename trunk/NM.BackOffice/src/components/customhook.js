import React, { useState } from "react";

const Customhook = (initialstate = 0) => {
  //const [state2,handleincrement,handledecrement,handleadd]=Customhook()
  const [state, setState] = useState(initialstate);
  const handleadd = () => setState(state + state);
  const handleincrement = () => setState(state + 1);
  const handledecrement = () => setState(state - 1);

  return [state, handleincrement, handledecrement, handleadd];
};
export default Customhook;
// <Button type="button"  onClick={()=>handleincrement()}>increment</Button>
// <Button type="button" onClick={()=>handledecrement()}>decrement</Button>
// <Button type="button" onClick={()=>handleadd()}>add</Button>
// <div>{state2}</div>
