import { useState } from "react";
import { Button } from "./Button/Button";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [decrementCount, setDecrementCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setDecrementCount(decrementCount - 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={increment}>Click me</Button>

      <p>You clicked {decrementCount} times</p>
      <Button onClick={decrement}>Click me</Button>
    </div>
  );
}
