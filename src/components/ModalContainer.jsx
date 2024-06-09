import { useState } from "react";
import Modal from "./Modal";

export default function ModalContaineer() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  function handleConfirm() {
    setShowConfirm(false);
  }

  function handleError() {
    setShowError(false);
  }

  function handleInfo() {
    setShowInfo(false);
  }

  return (
    <div>
      <button type="button" onClick={() => setShowConfirm(true)}>
        Покажи дію
      </button>
      <button type="button" onClick={() => setShowError(true)}>
        Покажи ерор
      </button>
      <button type="button" onClick={() => setShowInfo(true)}>
        Покажи інфо
      </button>
      {showConfirm && (
        <Modal
          title="Підтвердіть дію"
          message="Чи ви впевнені що ви хочете це зобити?"
          onClose={handleConfirm}
        />
      )}
      {showError && (
        <Modal
          title="Помилка"
          message="Щось пішло не так, будь ласка спробуйте пізніше"
          onClose={handleError}
        />
      )}
      {showInfo && (
        <Modal
          title="Інформація"
          message="Інформація про нове вікно"
          onClose={handleInfo}
        />
      )}
    </div>
  );
}
