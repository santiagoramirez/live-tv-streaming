import React from 'react'
import GuideItem from './components/guide-item'

class Guide extends React.Component {

  render() {
    const channels = [{
      id: 2292,
      title: 'Fox',
      logo: 'fox.png'
    }]

    return (
      <div className="guide">
        <div className="guide-list">
          {channels.map((channel, i) =>
            <GuideItem channel={channel} key={i}></GuideItem>
          )}
        </div>
      </div>
    )
  }

}

export default Guide
