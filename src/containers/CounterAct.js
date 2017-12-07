import { connect } from "react-redux"
import { increment, decrement } from "../actions"
import React from "react"

const Counter = ({ value, onIncrementClick, onDecrementClick }) => (
    <div>
        <h2>Here comes the counter</h2>
        <div>and it affects the timer(((</div>
        <h3>Value: {value}</h3>
        <button onClick={onIncrementClick}>+</button>
        <button onClick={onDecrementClick}>-</button>
    </div>
)

export default connect(
    state => ({
        value: state.countings
    }),
    {
        onIncrementClick: increment,
        onDecrementClick: decrement
    }
)(Counter);

// const mapStateToProps = state => ({
//     value: state.countings
// });
//
// const mapDispatchToProps = {
//     onIncrementClick: increment,
//     onDecrementClick: decrement
// };

// const CounterUse = connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default CounterUse;