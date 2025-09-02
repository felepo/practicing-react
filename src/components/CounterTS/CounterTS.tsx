import React, { useState } from 'react';

const CounterTS = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(prev => prev + 1);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">CounterTS Component</h2>
      <p className="text-lg mb-4">Count: {count}</p>
      <button
        className="px-6 py-2.5 rounded-lg cursor-pointer text-white text-sm tracking-wider font-medium border-0 outline-0 outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
        onClick={increment}
      >
        Increment
      </button>
    </>
  );
};

export default CounterTS;