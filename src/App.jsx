import React from 'react'
import {Provider } from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import store from '@app/store'

import Guide from '@app/scenes/Guide'
import WatchLive from '@app/scenes/WatchLive'
import Watch from '@app/scenes/Watch'

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/guide" component={Guide} />
          <Route path="/watch/live/:channelId" component={WatchLive} />
          <Route path="/watch/video/:videoId" component={Watch} />
        </Switch>
      </Provider>
    )
  }

}

export default App
