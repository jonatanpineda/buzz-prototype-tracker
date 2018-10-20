import { 
  call,
  put,
  select,
  takeEvery,
  take,
  cancel,
  fork
} from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {
  BUS_CONNECT,
  BUS_TRACKING_START,
  BUS_LOCATION_SEND,
  BUS_DISCONNECT
} from '../constants/actionTypes'
import { 
  doConnectBusFulfilled, 
  doConnectBusRejected,
  doSendBusLocationFulfilled,
  doSendBusLocationRejected,
  doSendBusLocation
} from '../actions/bus'
import { 
  connectBus, 
  sendBusLocation 
} from '../api/bus'
import { SEND_LOCATION_INTERVAL } from '../constants/intervals'
import { getBus } from '../selectors/bus'

export function* handleConnectBus(action) {
  const code = action.payload

  try {
    if(code) {
      const result = yield call(connectBus, code)
      yield put(doConnectBusFulfilled(result._id))
    } else {
      yield put(doConnectBusRejected())
    }
  } catch(error) {
    yield put(doConnectBusRejected())
  }
}

export function* watchConnectBus() {
  yield takeEvery(BUS_CONNECT, handleConnectBus)
}

function* handleSendBusLocation(action) {
  try {
    const { lat, lon } = action.payload
    const busId = yield select(getBus)
    console.log(busId)
    const result = yield call(sendBusLocation, busId, lat, lon)
    yield put(doSendBusLocationFulfilled())
  } catch(error) {
    console.log(error)
    yield put(doSendBusLocationRejected())
  }
}

export function* watchSendBusLocation() {
  yield takeEvery(BUS_LOCATION_SEND, handleSendBusLocation)
}

function getCurrentGeoPosition() {
  return new Promise(
    resolve => {
      navigator.geolocation.getCurrentPosition(position => resolve(position));
    });
}

function* handleStartBusTracking(action) {
  while(true) {
    try {
      const location = yield call(getCurrentGeoPosition)
      const { latitude, longitude } = location.coords
      yield put(doSendBusLocation(latitude, longitude))
      yield delay(SEND_LOCATION_INTERVAL)
    } catch(error) {
      console.log(error)
    }
  }
}

export function* watchStartBusTracking() {
  while(yield take(BUS_TRACKING_START)) {
    const repeatSendBusLocation = yield fork(handleStartBusTracking)
    yield take(BUS_DISCONNECT)
    yield cancel(repeatSendBusLocation)
  }
}

