/**
 * Notes:
 *
 * A main view to show after login.
 * A view to see channels (guide).
 * A view to watch live tv.
 * A view to watch videos on demand.
 */

import React from 'react'
import {render} from 'react-dom'
import {Provider } from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import store from '@app/store'

import Guide from '@app/scenes/guide'
import WatchLive from '@app/scenes/watch-live'
import Watch from '@app/scenes/watch'

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/guide" component={Guide} />
            <Route path="/watch/live/:channelId" component={WatchLive} />
            <Route path="/watch/video/:videoId" component={Watch} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }

}

render(<App />, document.querySelector('#app'))
