import { useState, useEffect } from "react";

const CounterWithEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]);

  return (
    <div>
      <p>The counter is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment +</button>
      <button onClick={() => setCount(count - 1)}>Decrement -</button>
    </div>
  );
}

export default CounterWithEffect;