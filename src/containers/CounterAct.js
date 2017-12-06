import { connect } from 'react-redux'
import { increment } from '../actions'

import Counter from "../components/Counter";

const CounterAct = (state = 0, action) => {
    console.log(action)
    switch(action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

// const mapStateToProps = state => {
//     return state
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         onIncrementClick: dispatch(increment())
//     }
// }
//
// const CounterUse = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Counter)


// export default CounterUse
export default CounterAct