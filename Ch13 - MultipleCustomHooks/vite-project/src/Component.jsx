import React from "react";
import { useFetch } from "./hooks/useFetch";
import { useCounter } from "./hooks/useCounter";

const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter();
  const { data, isLoading} = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );

  return (
    <>
      <h1>Multiple Custom Hooks</h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Loading ...</div>
      ) : (
        <blockquote className='blockquote text-end'>
          <p className='mb-1'>{data[0]?.quote}</p>
          <footer className='blockquote-footer'>{data[0]?.author}</footer>
        </blockquote>
      )}
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
};

export default MultipleCustomHooks;
