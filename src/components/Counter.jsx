import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>The counter is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment +</button>
      <button onClick={() => setCount(count - 1)}>Decrement -</button>
    </div>
  );
}

export default Counter;