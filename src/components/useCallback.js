import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Without useCallback: this function is recreated on every render
  const handleClick = () => {
    setCount(count+1);
    console.log('Button clicked!');
  };

  // With useCallback: the function is only recreated if count changes
  const memoizedHandleClick = useCallback(() => {
    // setCount(count+1);
    console.log('Button clicked! Current count:', count);
  }, [count]);

  return (
    <div>
        <h1>{count}</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={memoizedHandleClick}>Click me with memoization</button>
    </div>
  );
}
export default MyComponent;