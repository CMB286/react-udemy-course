import "./App.css";
import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleCountAdd() {
    setCount((c) => c + step);
  }

  function handleCountSub() {
    setCount((c) => c - step);
  }

  function handleStepAdd() {
    setStep((s) => s + 1);
  }

  function handleStepSub() {
    setStep((s) => s - 1);
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleStepSub}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepAdd}>+</button>
      </div>
      <div>
        <button onClick={handleCountSub}>-</button>
        <span>Counter: {count}</span>
        <button onClick={handleCountAdd}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
