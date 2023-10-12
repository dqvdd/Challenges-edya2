import { useCounter } from './hooks/useCounter';

const MyComponent = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default MyComponent;