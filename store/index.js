import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import machineSynchronizer from '../middleware/machineSynchronizer'
import rootSaga from '../sagas'
import rootReducer from '../reducers'

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware(
      saga,
      machineSynchronizer
    )
  )
)

saga.run(rootSaga)

export default store
