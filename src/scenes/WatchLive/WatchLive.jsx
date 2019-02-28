import './WatchLive.scss'

import React from 'react'
import Guide from '@app/scenes/Guide'

class WatchLive extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showGuide: false
    }
  }

  toggleGuide() {
    if (!this.state.showGuide) {
      this.setState({showGuide: true})
    } else {
      this.setState({showGuide: true})
    }
  }

  render() {
    return (
      <div className="video-player">
        <video></video>
        <a className="video-player-guide-link" onClick={() => this.toggleGuide()}>Back To Guide</a>
        {this.state.showGuide ? <Guide /> : ''}
        {this.props.children}
      </div>
    )
  }

}

export default WatchLive
