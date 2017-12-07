import { connect } from "react-redux"
import { increment, decrement } from "../actions"
import React from "react"

const Counter = ({ value, onIncrementClick, onDecrementClick }) => (
    <div>
      <h1>Here comes counter</h1>
      <h2>Value: {value}</h2>
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