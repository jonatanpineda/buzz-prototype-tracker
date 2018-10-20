import { MACHINE_SYNC } from '../constants/actionTypes'

export const doSyncMachine = (nextMachine) => ({
  type: MACHINE_SYNC,
  payload: nextMachine
})
