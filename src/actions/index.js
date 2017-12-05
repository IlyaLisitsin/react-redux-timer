let nextTodoId = 0
let number = 0

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const increment = number => {
  return {
    type: 'INCREMENT',
    number
  }
}

export const decrement = number => {
  return {
    type: 'DECREMENT',
    number
  }
}