import { useState } from "react";

export default function ButtonT() {
  const [buttonName, setButtonName] = useState(true);
  return (
    <button type="button" onClick={() => setButtonName(false)}>
      {buttonName ? "Кнопка" : "Клікнуто"}
    </button>
  );
}
