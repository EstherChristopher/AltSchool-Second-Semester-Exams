import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import useCounter from "./counter";

const Counter = () => {
  // To get the input value.
  const inputRef = useRef();

  const { count, increment, decrement, reset, set } = useCounter();

  return (
    <>
      <Helmet>
        <title>Counter</title>
        <meta name="description" content="Counter page" />
      </Helmet>

        <h1>{count}</h1>
        <button className="increment" onClick={() => increment()}>
          Increase
        </button>
        <button className="decrement" onClick={() => decrement()}>
          Decrease
        </button>
        <button className="reset" onClick={() => reset()}>
          Reset
        </button>

        <input type="number" ref={inputRef} />
        <button
          className="set"
          onClick={() => {
            const value = Number(inputRef.current.value);
            set(value);
          }}
        >
          Set
        </button>
    </>
  );
};
export default Counter;
