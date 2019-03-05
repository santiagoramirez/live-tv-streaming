import './RowItem.scss'

import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import TimeBar from '@app/components/Guide/components/TimeBar'
import {hideGuide} from '@app/store/video-player/actions'

class RowItem extends React.Component {

  handleRowItemClick() {
    this.props.hideGuide()
    this.props.history.push(`/watch/live/${this.props.channel.id}`)
  }

  render() {
    const showtimes = this.props.channel.showtimes.filter((showtime) => {
      const now = new Date()
      const endTime = new Date(showtime.endTime)
      endTime.setMonth(now.getMonth())
      endTime.setDate(now.getDate())
      return endTime > now
    })

    return (
      <a onClick={() => this.handleRowItemClick()}>
        <div className="guide-item">
          <div className="guide-item-logo">
            <img src={this.props.channel.logo} alt={this.props.channel.title} />
          </div>
          <div className="guide-item-timeslots">
            {showtimes.map((program, index) =>
              <TimeBar program={program} key={index} />
            )}
          </div>
        </div>
      </a>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  hideGuide: () => dispatch(hideGuide())
})

export default connect(null, mapDispatchToProps)(withRouter(RowItem))
