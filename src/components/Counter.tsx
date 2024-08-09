import { useState } from "react";

const Counter = () => {
  const [buttonState, setButtonState] = useState(true);
  const [counter, setCounter] = useState(0);
  return (
    <center>
      {"    "}
      <button
        className={"btn btn-" + (buttonState ? "success" : "danger")}
        onClick={() => {
          setCounter(buttonState ? counter + 1 : counter - 1);
          setButtonState(!buttonState);
        }}
      >
        {buttonState ? "+" : "-"}
      </button>
      <br />
      <br />
      <button type="button" className="btn btn-secondary">
        <h3>
          <span className="badge text-bg-dark">{counter}</span>
        </h3>
      </button>
      <br />
      <br />
      {"    "}
      <button
        className={"btn btn-" + (buttonState ? "danger" : "success")}
        onClick={() => {
          setCounter(buttonState ? counter - 1 : counter + 1);
          setButtonState(!buttonState);
        }}
      >
        {buttonState ? "-" : "+"}
      </button>
    </center>
  );
};

export default Counter;
