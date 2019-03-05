import './TimeslotRow.scss'

import React from 'react'
import TimeslotItem from '@app/components/Guide/components/TimeslotItem'

class TimeslotRow extends React.Component {

  render() {
    const showtimes = this.props.channel.showtimes.filter((showtime) => {
      const now = new Date()
      const endTime = new Date(showtime.endTime)
      endTime.setMonth(now.getMonth())
      endTime.setDate(now.getDate())
      return endTime > now
    })

    return (
      <div className="timeslot-row">
        {showtimes.map((program, index) =>
          <TimeslotItem program={program} key={index} />
        )}
      </div>
    )
  }

}

export default TimeslotRow
