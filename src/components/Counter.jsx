import { useReducer } from "react";

const initialState = 0;

export default function Counter() {
  function counterReducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <button type="button" onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>
      <span className="counter-value"> {state} </span>
      <button type="button" onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </button>
      <button type="button" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}
