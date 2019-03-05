import './TimeBar.scss'

import React from 'react'

class TimeBar extends React.Component {

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
    let elapsed = (startTime - firstTimeslot) / 1000 / 60

    if (elapsed < 0) {
      duration = duration + elapsed
    }

    return (containerWidth * (duration / (4 * 30)))
  }

  render() {
    const width = this.getWidth()

    return (
      <div className="time-bar-item-wrapper" style={{width: width + 'px'}}>
        <div className="time-bar-item">
          <div className="time-bar-item-title">{this.props.program.title}</div>
          <div className="time-bar-item-description">{this.props.program.description}</div>
        </div>
      </div>
    )
  }

}

export default TimeBar
