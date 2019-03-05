import './Guide.scss'

import React from 'react'
import TimeslotRow from './components/TimeslotRow'
import channels from '@app/modules/guide-data'

class Guide extends React.Component {

  render() {
    return (
      <div className="guide">
        <div className="guide-timeslots">
          {channels.map((channel, i) =>
            <TimeslotRow channel={channel} key={i}></TimeslotRow>
          )}
        </div>
      </div>
    )
  }

}

export default Guide
