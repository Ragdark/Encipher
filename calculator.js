import { useState } from "react";
import "./calc.css";

function Calculator() {

  const [value, setValue] = useState("");

  function add(val) {
    setValue(value + val);
  }

  function clearAll() {
    setValue("");
  }

  function calculate() {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  }

  return (
    <div className="main">
      <div className="head">Calculator</div>

      <input className="txt" type="text" value={value} readOnly />

      <div className="grid">
        <button className="btn" onClick={() => add("7")}>7</button>
        <button className="btn" onClick={() => add("8")}>8</button>
        <button className="btn" onClick={() => add("9")}>9</button>

        <button className="btn" onClick={() => add("4")}>4</button>
        <button className="btn" onClick={() => add("5")}>5</button>
        <button className="btn" onClick={() => add("6")}>6</button>

        <button className="btn" onClick={() => add("1")}>1</button>
        <button className="btn" onClick={() => add("2")}>2</button>
        <button className="btn" onClick={() => add("3")}>3</button>

        <button className="btn" onClick={() => add("0")}>0</button>
        <button className="btn" onClick={clearAll}>C</button>
        <button className="btn" onClick={calculate}>=</button>
      </div>

      <div className="ops">
        <button className="btn" onClick={() => add("+")}>+</button>
        <button className="btn" onClick={() => add("-")}>-</button>
        <button className="btn" onClick={() => add("*")}>*</button>
        <button className="btn" onClick={() => add("/")}>/</button>
      </div>
    </div>
  );
}

export default Calculator;