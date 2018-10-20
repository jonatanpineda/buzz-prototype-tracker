import { MACHINE_SYNC } from '../constants/actionTypes'
import { getMachine } from '../selectors/machine'
import machine from '../machine'

const machineSynchronizer = store => next => action => {
  const state = store.getState()
  const currentMachine = getMachine(state)
  const nextMachine = machine.transition(currentMachine, action.type)

  next(action)

  if (nextMachine && action.type !== MACHINE_SYNC) {
    if (nextMachine.history !== undefined) {
      store.dispatch({ type: MACHINE_SYNC, payload: nextMachine.value })
    }
  }

}

export default machineSynchronizer
