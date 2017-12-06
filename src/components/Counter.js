import React from "react";

// 1) Подумай что лишнее в onClick
// 2) Подумай как еще сократить синтаксис возврата JSX тут

const Counter = ({ value, onIncrementClick, onDecrementClick }) => {
  return (
    <div>
      <h1>Here comes counter</h1>
      <h2>Value: {value}</h2>
      <button onClick={() => onIncrementClick()}>+</button>
      <button onClick={() => onDecrementClick()}>-</button>
    </div>
  );
};

export default Counter;
