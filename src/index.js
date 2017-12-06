import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
// import CounterAct from './containers/CounterAct'
import { createStore } from 'redux'
// import todoApp from './reducers'
// import App from './components/App'
//

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
let store = createStore(CounterAct)

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrementClick={() => {
                store.dispatch({ type: 'INCREMENT' })
            }}
            onDecrementClick={() => {
                store.dispatch({ type: 'DECREMENT' })
            }}
        />,
        document.getElementById('root')
    )
}

render()

store.subscribe(render)