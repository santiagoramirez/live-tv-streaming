import React from 'react'
import {connect} from 'react-redux-dom'
import {pause, play} from '@app/store/watch'

class Watch extends React.Component {

  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }

  handlePause(e) {
    // Do something here...
  }

  handlePlay(e) {
    // Do something here...
  }

  render() {
    return (
      <div className="watch">
        <video className="watch-video" src={this.props.source} ref={this.videoRef} onPause={(e) => handlePause(e)} onPlay={(e) => handlePlay(e)}></video>
        <div className="watch-controls">
          {this.props.isPaused ? (
            <div className="control-play" onClick={(e) => this.videoRef.play()}>Play</div>
          ) : (
            <div className="control-pause" onClick={(e) => this.videoRef.pause()}>Pause</div>
          ) }
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  source: state.watch.source,
  isPaused: state.watch.isPaused
})

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause())
})

export default connect(mapStateToProps, mapDispatchToProps)(Watch)
