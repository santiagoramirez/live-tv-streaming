import {GUIDE_SHOW, GUIDE_HIDE} from './actions'

const initialState = {
  showGuide: false
}

function videoPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case GUIDE_SHOW:
      return Object.assign({}, state, {showGuide: true})

    case GUIDE_HIDE:
      return Object.assign({}, state, {showGuide: false})

    default:
      return state
  }
}

export default videoPlayerReducer
