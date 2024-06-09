import styles from "./Atomic.module.css";

function Atomic(props) {
  return (
    <div>
      <p className={props.C ? styles.C : styles.C} {...props}>
        Перший змінює кольору тексту на червоний
      </p>
      <p>Другий</p>
      <p>Третій</p>
    </div>
  );
}

export default Atomic;
