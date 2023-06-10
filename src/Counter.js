import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(loadCount() || 0);

  useEffect(() => {
    window.localStorage.setItem('count', count || 0);
  }, [count]);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  function decrement() {
    setCount(prevCount => prevCount - 1);
  }
  function loadCount() {
    return parseInt(window.localStorage.getItem('count'));
  }

  return <div>
    <button onClick={decrement}>Decrement</button>
    Counter: {count}
    <button onClick={increment}>Increment</button>
  </div>;
}
