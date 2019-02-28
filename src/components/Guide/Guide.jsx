import './Guide.scss'

import React from 'react'

import GuideItem from './components/GuideItem'

class Guide extends React.Component {

  render() {
    const channels = [{
      id: 1,
      title: 'Fox',
      logo: 'fox.png'
    }, {
      id: 2,
      title: 'NBC',
      logo: 'nbc.png'
    }, {
      id: 3,
      title: 'ABC',
      logo: 'nbc.png'
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
