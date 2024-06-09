import { useEffect, useState } from "react";

function MD() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Компонент змонтувався");
    return () => {
      console.log("Компонент демонтувався");
    };
  });

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        + 1
      </button>
    </div>
  );
}

export default MD;
