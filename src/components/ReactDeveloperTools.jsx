import { useState } from "react";

export default function Counter20() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Копку натиснуто {count} раз</p>
      <button type="button" onClick={increment}>
        Кнопка
      </button>
    </div>
  );
}
