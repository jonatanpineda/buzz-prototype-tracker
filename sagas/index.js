import { all, fork, takeEvery } from 'redux-saga/effects'
import { BUS_CONNECT } from '../constants/actionTypes'
import { 
  watchConnectBus, 
  watchStartBusTracking,
  watchSendBusLocation
} from './bus'

function* watchAll() {
  yield all([
    watchConnectBus(),
    watchStartBusTracking(),
    watchSendBusLocation()
  ])
}

export default watchAll
