import './TimeBar.scss'

import React from 'react'

class TimeBar extends React.Component {

  getTimeBarWidth() {
    // This would eventually be pulled from the container containing guide row items.
    // For now, the window width works.
    let containerWidth = window.innerWidth

    // This would eventually be created dynamically.
    let firstTimeslot = new Date('03/04/2019 18:23:00')

    if (firstTimeslot.getMinutes() > 30) {
      firstTimeslot.setMinutes(30)
    } else {
      firstTimeslot.setMinutes(0)
    }

    let startTime = new Date('03/04/2019 ' + this.props.program.startTime)
    let endTime = new Date('03/04/2019 ' + this.props.program.endTime)
    let duration = (endTime - startTime) / 1000 / 60
    let elapsed = startTime - firstTimeslot

    if (elapsed < 0) {
      duration = duration + (elapsed / 1000 / 60)
    }

    return (containerWidth * (duration / (4 * 30)))
  }

  render() {
    return (
      <div className="time-bar-item-wrapper" style={{width: this.getTimeBarWidth() + 'px'}}>
        <div className="time-bar-item">
          <div className="time-bar-item-title">{this.props.program.title}</div>
          <div className="time-bar-item-description">{this.props.program.description}</div>
        </div>
      </div>
    )
  }

}

export default TimeBar
