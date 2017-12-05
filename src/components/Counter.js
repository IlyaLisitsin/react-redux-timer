import React from 'react';
import { connect } from 'react-redux'

const Counter = ({ value, onIncrementClick }) => (
    <div>
        <h1>Here comes counter</h1>
        <h2>Value: {value}</h2>
        <button onClick={() => onIncrementClick()}>+</button>
    </div>
)

export default Counter