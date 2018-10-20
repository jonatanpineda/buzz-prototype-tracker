import {  
  BUS_CONNECT,
  BUS_CONNECT_FULFILLED,
  BUS_CONNECT_REJECTED,
  BUS_DISCONNECT,
  BUS_TRACKING_START,
  BUS_TRACKING_STOP,
  BUS_LOCATION_SEND,
  BUS_LOCATION_SEND_FULFILLED,
  BUS_LOCATION_SEND_REJECTED
} from '../constants/actionTypes'

export const doConnectBus = (code) => ({ 
  type: BUS_CONNECT,
  payload: code
})

export const doConnectBusFulfilled = (bus) => ({ 
  type: BUS_CONNECT_FULFILLED,
  payload: bus
})

export const doConnectBusRejected = () => ({ type: BUS_CONNECT_REJECTED })

export const doDisconnectBus = () => ({ type: BUS_DISCONNECT })

export const doStartBusTracking = () => ({ type: BUS_TRACKING_START })

export const doStoptBusTracking = () => ({ type: BUS_TRACKING_STOP })

export const doSendBusLocation = (lat, lon) => ({
  type: BUS_LOCATION_SEND,
  payload: {
    lat,
    lon
  }
})

export const doSendBusLocationFulfilled = () => ({ type: BUS_LOCATION_SEND_FULFILLED })

export const doSendBusLocationRejected = () => ({ type: BUS_LOCATION_SEND_REJECTED })
