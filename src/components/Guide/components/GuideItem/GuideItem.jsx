import './GuideItem.scss'

import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {hideGuide} from '@app/store/video-player/actions'

class GuideItem extends React.Component {

  handleGuideItemClick() {
    this.props.hideGuide()
    this.props.history.push(`/watch/live/${this.props.channel.id}`)
  }

  render() {
    return (
      <a onClick={() => this.handleGuideItemClick()}>
        <div className="guide-item">
          <div className="guide-item-logo">
            <img src={this.props.channel.logo} alt={this.props.channel.title} />
          </div>
        </div>
      </a>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  hideGuide: () => dispatch(hideGuide())
})

export default connect(null, mapDispatchToProps)(withRouter(GuideItem))
