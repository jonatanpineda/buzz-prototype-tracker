import { Machine } from 'xstate'
import { 
  BUS_CONNECT,
  BUS_CONNECT_FULFILLED,
  BUS_CONNECT_REJECTED,
  BUS_DISCONNECT,
  BUS_TRACKING_START,
  BUS_TRACKING_STOP,
  BUS_LOCATION_SEND,
  BUS_LOCATION_SEND_FULFILLED
} from '../constants/actionTypes'

const machine = Machine({
  initial: 'connectBusScreen',
  states: {
    connectBusScreen: {
      on: {
        BUS_CONNECT: 'connectBusScreen.connectingBus',
        BUS_CONNECT_FULFILLED: 'trackingScreen',
        BUS_CONNECT_REJECTED: 'connectBusScreen.showingError'
      },
      states: {
        connectingBus: {},
        showingError: {}
      }
    },
    trackingScreen: {
      on: {
        BUS_DISCONNECT: 'connectBusScreen',
        BUS_LOCATION_SEND: 'trackingScreen.sendingBusLocation',
        BUS_LOCATION_SEND_FULFILLED: 'trackingScreen.sendingBusLocationFulfilled'
      },
      states: {
        sendingBusLocation: {},
        sendingBusLocationFulfilled: {}
      }
    }
  }
})

export default machine
