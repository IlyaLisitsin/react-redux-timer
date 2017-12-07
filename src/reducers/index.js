import { combineReducers } from 'redux'
import countings from './countings'
import timering from './timering'
import tick from './tick'

const appReducers = combineReducers({
  countings,
  timering,
  tick
})

export default appReducers;
