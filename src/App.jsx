import './App.scss'

import React from 'react'
import {Provider } from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import Guide from '@app/scenes/Guide'
import VideoPlayer from '@app/scenes/VideoPlayer'
import Watch from '@app/scenes/Watch'
import store from '@app/store'

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/watch" component={Watch} />
          <Route path="/watch/guide" component={Guide} />
          <Route path="/watch/live/:channelId" component={VideoPlayer} />
          <Route path="/watch/video/:videoId" component={VideoPlayer} />
        </Switch>
      </Provider>
    )
  }

}

export default App
