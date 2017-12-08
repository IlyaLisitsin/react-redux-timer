import { connect } from "react-redux";
import { start, stop, clear } from "../actions/index";
import React from 'react'

class Timer extends React.Component {
    // Зачем тут конструктор
    constructor(props) {
        super(props)
    }


    // Методы которые не обращаются к this или state лучше выносить как хелпер функцию за пределы класс
    msHandler = (ms) => {
        const res = { ms: 0, s: 0, h: 0, m: 0 }
        res.h = Math.floor(ms / 3600000)
        res.m = Math.floor((ms - res.h * 3600000) / 60000)
        res.s = Math.floor((ms - res.h * 3600000 - res.m * 60000) / 1000)
        res.ms  = ms - res.h * 3600000 - res.m * 60000 - res.s * 1000

        return res
    }

    // Подумай что тут не так :) Ответ можешь написать в коммент или слак.
    // Подсказка - проследи весь вызов функции и на что она в итоге влияет
    componentWillReceiveProps(nextProps) {
        this.msHandler(nextProps.ms)
    }

    startTick = () => {
        if (!this.props.stop) this.props.handleStart()
    }

    componentDidMount() {
        // Ты вызываешь старт таймера при загрузка компонента, но не даешь эьто сделать в проверке выше,
        //  тк this.props.stop по умоланию true
        //  То есть метод постоянно диспатчится, но не проходит - JS нон стоп делает бесполезную работу
        //  WHAAAAT?))
        // Вообщем подумай как все реорганизовать без холостого интервала.
        setInterval(this.startTick, 1)
    }

    componentWillUnmount() {
        clearInterval(this.startTick)
    }

    render() {
        const {ms, handleStart, handleStop, handleClear} = this.props
        const res = this.msHandler(ms)

        return (
            <div>
                <h1>And here is the timer</h1>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
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
        stop: state.tick
    }),
    {
        handleStart: start,
        handleStop: stop,
        handleClear: clear,
    }
)(Timer)
