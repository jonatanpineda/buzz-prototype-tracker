import { MACHINE_SYNC } from '../constants/actionTypes'
import machine from '../machine'

const applySyncMachine = (state, action) => action.payload

function machineReducer(state = machine.initial, action) {
  switch(action.type) {
    case MACHINE_SYNC:
      return applySyncMachine(state, action)
    default:
      return state
  }
}

export default machineReducer
