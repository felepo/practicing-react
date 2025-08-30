import useCounter from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter with Custom Hook</h2>
      <p style={{ fontSize: '24px' }}>{count}</p>
      <button onClick={increment} style={{ margin: '5px' }}>Increment</button>
      <button onClick={decrement} style={{ margin: '5px' }}>Decrement</button>
      <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
};

export default CounterWithCustomHook;