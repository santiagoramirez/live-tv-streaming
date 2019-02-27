import React from 'react'
import GuideItem from './components/guide-item'

class Guide extends React.Component {

  render() {
    return (
      <div className="guide">
        <div className="guide-list">
          {this.props.channels.map((channel, i) =>
            <GuideItem channel={channel} key={i}></GuideItem>
          )}
        </div>
      </div>
    )
  }

}

export default Guide
