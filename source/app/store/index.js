import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

function reducer(state, action) {
  return state
}

const logger = createLogger()
const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store
