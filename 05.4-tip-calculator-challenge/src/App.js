import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  let totalTip = (myTip + friendTip) / 2;

  function handleReset() {
    setBill("");
    setMyTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <Service tip={myTip} setTip={setMyTip}>
        How did you like the service?
      </Service>
      <Service tip={friendTip} setTip={setFriendTip}>
        How did your friend like the service?
      </Service>

      {bill > 0 && (
        <>
          {" "}
          <Result bill={bill} tip={totalTip}></Result>
          <ResetButton handleReset={handleReset}></ResetButton>{" "}
        </>
      )}
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Service({ tip, setTip, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0" key={0}>
          Dissatisfied (0%)
        </option>
        <option value="5" key={1}>
          It was okay (5%)
        </option>
        <option value="10" key={2}>
          It was good (10%)
        </option>
        <option value="20" key={3}>
          Absolutely amazing! (20%)
        </option>
      </select>
    </div>
  );
}

function Result({ bill, tip }) {
  tip = bill * (tip / 100);
  let total = Number(bill) + Number(tip);

  return (
    <div>
      <h3>
        You pay ${total} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}

function ResetButton({ handleReset }) {
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
