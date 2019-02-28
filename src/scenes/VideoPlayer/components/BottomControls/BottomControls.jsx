import './BottomControls.scss'

import React from 'react'
import {connect} from 'react-redux'
import {play, pause} from '@app/store/video-player/actions'

class BottomControls extends React.Component {

  render() {
    return (
      <div className="bottom-controls">
        {this.props.isPaused ? (
          <div className="control-play" onClick={(e) => this.props.play()}>Play</div>
        ) : (
          <div className="control-pause" onClick={(e) => this.props.pause()}>Pause</div>
        ) }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  isPaused: false
})

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause())
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomControls)
