import { connect } from "react-redux";
import { start, stop, clear } from "../actions/index";
import React from 'react'

const msHandler = (ms) => {
    const res = { ms: 0, s: 0, h: 0, m: 0 }
    res.h = Math.floor(ms / 3600000)
    res.m = Math.floor((ms - res.h * 3600000) / 60000)
    res.s = Math.floor((ms - res.h * 3600000 - res.m * 60000) / 1000)
    res.ms  = ms - res.h * 3600000 - res.m * 60000 - res.s * 1000

    return res
}

let repeat

class Timer extends React.Component {

    tick = () => {
        this.props.handleStart()
    }

    startTick = () => {
        repeat = setInterval(this.tick, 1)
    }

    clearTick = () => {
        this.props.handleStop()
        repeat = clearInterval(repeat)
    }

    componentWillUnmount() {
        this.props.handleStop()
        repeat = clearInterval(repeat)
    }

    render() {
        const {ms, handleClear} = this.props
        const res = msHandler(ms)

        return (
            <div>
                <h1>And here is the timer</h1>
                <button onClick={this.startTick}>Start</button>
                <button onClick={this.clearTick}>Stop</button>
                <button onClick={handleClear}>Clear</button>
                <div>
                    <span>h: {res.h}</span>
                    <span>m: {res.m}</span>
                    <span>s: {res.s}</span>
                    <span>ms: {res.ms}</span>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        ms: state.timering,
    }),
    {
        handleStart: start,
        handleStop: stop,
        handleClear: clear,
    }
)(Timer)
