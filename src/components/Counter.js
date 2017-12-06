import React from 'react';

const Counter = ({ value, onIncrementClick, onDecrementClick }) => (
    <div>
        <h1>Here comes counter</h1>
        <h2>Value: {value}</h2>
        <button onClick={() => onIncrementClick()}>+</button>
        <button onClick={() => onDecrementClick()}>-</button>
    </div>
)

export default Counter