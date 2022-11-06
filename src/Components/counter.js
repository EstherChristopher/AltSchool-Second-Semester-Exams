import { useReducer } from "react";

const initialData = { count: 0 };

const stateReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "set":
      return { count: action.payload };
    default:
      return state;
  }
};

const useCounter = () => {
  const [state, dispatch] = useReducer(stateReducer, initialData);

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  const set = (value) => {
    dispatch({ type: "set", payload: value });
  };

  return { count: state.count, increment, decrement, reset, set };
};
export default useCounter;
