import { combineReducers } from 'redux'
import countings from './countings'

const appReducers = combineReducers({
  countings,
})

export default appReducers