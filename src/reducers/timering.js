const timering = (state = 0, action) => {
    // console.log()
    switch(action.type) {
        case 'START':
            return state + 1
        case 'CLEAR':
            return 0
        case 'STOP':
            return state
        default:
            return state
    }
}

export default timering;
