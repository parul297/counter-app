import { useState } from "react";

const  Counter = ()=>{
  const [Count , UpdateCount] = useState(0);
  const handleIncrement = () =>{
    UpdateCount((prevState)=>prevState+1)
  }
  const handleDecrement = () =>{
    UpdateCount((prevState)=>prevState-1)
  }
    return (
    <div>
        <h1>Counter App</h1>
        <p>Count:{Count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>


    </div>
    );
};

export default  Counter ;