import './Guide.scss'

import React from 'react'

import RowItem from './components/RowItem'
import channels from '@app/modules/guide-data'

class Guide extends React.Component {

  render() {
    return (
      <div className="guide">
        <div className="guide-list">
          {channels.map((channel, i) =>
            <RowItem channel={channel} key={i}></RowItem>
          )}
        </div>
      </div>
    )
  }

}

export default Guide
