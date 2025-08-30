import React, { useState, useCallback, useMemo } from "react"

const Child = React.memo(({counter}) => {
  console.log("Child rendered");
  return (
    <p>Counter: {counter}</p>
  );
});

function ExpensiveCalculation({ num }) {
  const result = useMemo(() => {
    console.log("Expensive calculation running...");
    let res = 0;
    for (let i = 0; i < 1e9; i++) {
      res += i;
    }
    return res + num;
  }, [num]);

  return <p>Expensive Calculation Result: {result}</p>;
}

const CounterWithReactMemo = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(prev => prev + 1);
  });

  return (
    <div>
      <button onClick={increment}>
        Increment
      </button>
      <Child counter={counter}/>
      <ExpensiveCalculation num={counter} />
    </div>
  );
}

export default CounterWithReactMemo;