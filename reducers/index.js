import { combineReducers } from 'redux'
import bus from './bus'
import machine from './machine'

const rootReducer = combineReducers({
  bus,
  machine
})

export default rootReducer
