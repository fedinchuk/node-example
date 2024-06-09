export default function Modal(props) {
  return (
    <div>
      <div>
        <h3>{props.title}</h3>
        <button type="button" onClick={props.onClose}>X</button>
      </div>
      <div>
        <p>{props.message}</p>
      </div>
    </div>
  );
}
