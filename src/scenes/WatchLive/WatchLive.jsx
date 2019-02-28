import './WatchLive.scss'

import React from 'react'
import {Link} from 'react-router-dom'

class WatchLive extends React.Component {

  render() {
    return (
      <div className="video-player">
        <video></video>
        <Link className="video-player-guide-link" to="/guide">Back To Guide</Link>
      </div>
    )
  }

}

export default WatchLive
