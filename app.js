/**
 * Notes:
 *
 * A main view to show after login.
 * A view to see channels (guide).
 * A view to watch live tv.
 * A view to watch videos on demand.
 */

class App extends React.Component {

  render() {
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/guide" component={Guide} />
          <Route path="/watch/live/:channelId" component={WatchLive} />
          <Route path="/watch/video/:videoId" component={Watch} />
        </Switch>
      </BrowserRouter>
    </Provider>
  }

}
