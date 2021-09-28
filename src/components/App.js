import React, { useState } from "react";
import "../styles/main.scss";
import data from "./Data";
const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  console.log(count);
  console.log(text);
  const handleSubmit = (e) => {
    let amount = parseInt(count);
    e.preventDefault();
    if (amount === 0 || amount < 0 || !amount) {
      setCount(0);
      setText(data.slice(0, 1));

      return;
    }
    if (amount > data.length - 1) {
      setText(data);
      return;
    }
    setText(data.slice(0, count));
  };
  const renderPara = text.map((para, i) => {
    return (
      <p key={i} className="para">
        {para}
      </p>
    );
  });
  return (
    <div className="container">
      <div className="container__heading">
        <h2>tired of boring lorem ipsum</h2>
      </div>
      <div className="container__form">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="amount" className="form__label">
            Paragraphs:
          </label>
          <input
            type="number"
            id="amount"
            className="form__input"
            onChange={(e) => setCount(e.target.value)}
            value={count}
          />
          <button className="form__btn">generate</button>
        </form>
      </div>
      {renderPara}
    </div>
  );
};
export default App;
