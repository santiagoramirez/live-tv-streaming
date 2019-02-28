import './GuideItem.scss'

import React from 'react'
import {Link, withRouter} from 'react-router-dom'

class GuideItem extends React.Component {

  render() {
    return (
      <Link to={`/watch/live/${this.props.channel.id}`}>
        <div className="guide-item">
          <div className="guide-item-logo">
            <img src={this.props.channel.logo} alt={this.props.channel.title} />
          </div>
        </div>
      </Link>
    )
  }

}

export default withRouter(GuideItem)
