import { useDispatch, useSelector } from "react-redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const incrementOne = () => ({ type: INCREMENT });
const decrementOne = () => ({ type: DECREMENT });

const CountReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

function Redux() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <p>count: {counter}</p>
      <div>
        <button type="button" onClick={() => dispatch(incrementOne())}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch(decrementOne())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export { CountReducer, Redux };
