const visibilityFilter = (state = 'SHOW_ALL', action) => {
  console.log('niig', action)
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter