import './Watch.scss'

import React from 'react'
import {Link} from 'react-router-dom'

class Watch extends React.Component {

  render() {
    return (
      <div className="watch">
        This is the main page for finding something good to watch.
        <Link to="/watch/guide">View Guide</Link>
      </div>
    )
  }

}

export default Watch
