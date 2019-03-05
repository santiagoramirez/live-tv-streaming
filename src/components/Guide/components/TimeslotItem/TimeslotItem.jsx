import './TimeslotItem.scss'

import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {hideGuide} from '@app/store/video-player/actions'

class TimeslotItem extends React.Component {

  handleClick() {
    this.props.hideGuide()
    this.props.history.push(`/watch/live/${this.props.program.id}`)
  }

  getPosition() {
    let containerWidth = (typeof window !== 'undefined') ? window.innerWidth : 0
    let timeslotWidth = (containerWidth / 4)
    let totalGuideWidth = (1440 / 30) * timeslotWidth
    let startTime = new Date(this.props.program.startTime)
    let positionPercent = ((startTime.getHours() * 60) + startTime.getMinutes()) / 1440
    let position =  positionPercent * totalGuideWidth
    return position
  }

  getWidth() {
    // This would eventually be pulled from the container containing guide row items.
    // For now, the window width works.
    let containerWidth = (typeof window !== 'undefined') ? window.innerWidth : 0

    // This would eventually be created dynamically.
    let firstTimeslot = new Date()

    if (firstTimeslot.getMinutes() > 30) {
      firstTimeslot.setMinutes(30)
    } else {
      firstTimeslot.setMinutes(0)
    }

    let startTime = new Date(this.props.program.startTime)
    let endTime = new Date(this.props.program.endTime)

    startTime.setMonth(firstTimeslot.getMonth())
    startTime.setDate(firstTimeslot.getDate())

    endTime.setMonth(firstTimeslot.getMonth())
    endTime.setDate(firstTimeslot.getDate())

    let duration = (endTime - startTime) / 1000 / 60

    return (containerWidth * (duration / (4 * 30)))
  }

  render() {
    const width = this.getWidth() + 'px'
    const left = this.getPosition() + 'px'

    return (
      <div className="timeslot-item" style={{width, left}} onClick={() => this.handleClick()}>
        <div className="timeslot-item-inner">
          <div className="timeslot-item-title">{this.props.program.title}</div>
          <div className="timeslot-item-description">{this.props.program.description}</div>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  hideGuide: () => dispatch(hideGuide())
})

export default connect(null, mapDispatchToProps)(withRouter(TimeslotItem))
