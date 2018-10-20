import { 
  BUS_CONNECT_FULFILLED,
  BUS_DISCONNECT
} from  '../constants/actionTypes'

const INITIAL_STATE = null

const applyConnectBusFulfilled = (state, action) => action.payload

const applyDisconnectBus = (state, action) => null

function busReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case BUS_CONNECT_FULFILLED:
      return applyConnectBusFulfilled(state, action)
    case BUS_DISCONNECT:
      return applyDisconnectBus(state, action)
    default:
      return state
  }
}

export default busReducer
