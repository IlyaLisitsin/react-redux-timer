const tick = (state = 0, action) => {
    // console.log('tick', state)
    switch(action.type) {
        case 'START':
            return false
        case 'STOP':
            return true
        case 'INCREMENT':
            return false
        case 'DECREMENT':
            return false
        default:
            return true
    }
}

export default tick