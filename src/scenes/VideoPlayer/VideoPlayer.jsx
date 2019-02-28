import './VideoPlayer.scss'

import React from 'react'
import {connect} from 'react-redux'
import {play, pause, showGuide, hideGuide} from '@app/store/video-player/actions'

import Guide from '@app/components/Guide'
import TopControls from './components/TopControls'
import BottomControls from './components/BottomControls'

class VideoPlayer extends React.Component {

  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }

  render() {
    return (
      <div className="video-player">
        <video className="video-player-video"
          src={this.props.source}
          ref={this.videoRef}
          onPlay={() => this.props.play()}
          onPause={() => this.props.pause()}>
        </video>
        <TopControls />
        <BottomControls />
        {this.props.showGuideBool ? <Guide /> : ''}
      </div>
    )
  }

}

const mapStateToProps = state => ({
  showGuideBool: state.videoPlayer.showGuide
})

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)
