import { connect } from 'react-redux'
import {start, stop, clear} from "../actions/index"
import Timer from "../components/Timer"

const mapStateToProps = state => {
    return {
        ms: state.timering
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleStart: () => {
            dispatch(start())
        },
        handleStop: () => {
            dispatch(stop())
        },
        handleClear: () => {
            dispatch(clear())
        },
    }
}

const TimerUse = connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer)

export default TimerUse