import { useState } from "react";
import Modal from "./Modal";

export default function ElementInternals() {
  const [showConfirm, setShowConfirm] = useState(true);

  function handleConfirm() {
    setShowConfirm(false);
    console.log("Модальне вікно закрите");
  }

  return (
    <div>
      {showConfirm && (
        <Modal
          title="Власний заголовок"
          message="Повідомлення"
          onClose={handleConfirm}
        />
      )}
    </div>
  );
}
