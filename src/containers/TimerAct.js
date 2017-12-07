import { connect } from "react-redux";
import { start, stop, clear } from "../actions/index";
import React from 'react'

const Timer = ({ms, handleStart, handleStop, handleClear}) => (
    <div>
        <h1>And here is the timer</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleClear}>Clear</button>
        <div>{ms}</div>
    </div>
)

export default connect(
    state => ({
        ms: state.timering
    }),
    {
        handleStart: start,
        handleStop: stop,
        handleClear: clear,
    }
)(Timer)
