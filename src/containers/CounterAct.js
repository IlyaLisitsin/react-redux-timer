import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Counter from "../components/Counter";

const mapStateToProps = state => {
    return {
        value: state.countings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementClick: () => {
            dispatch(increment())
        },
        onDecrementClick: () => {
            dispatch(decrement())
        }
    }
}

const CounterUse = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default CounterUse