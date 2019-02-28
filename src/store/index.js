import {createStore, applyMiddleware, combineReducers} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

import videoPlayer from '@app/store/video-player/reducers'

const logger = createLogger()

const store = createStore(combineReducers({
  videoPlayer
}), applyMiddleware(thunk, logger))

export default store
