import { combineReducers } from 'redux'
import timering from './timering'
import tick from './tick'

const appReducers = combineReducers({
  timering,
  tick,
})

export default appReducers;
